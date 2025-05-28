import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock, Users, User, Mail, Phone } from 'lucide-react';

import { supabase } from '@/supabaseClient';

interface ReservationDialogProps {
  children: React.ReactNode;
}

const ReservationDialog = ({ children }: ReservationDialogProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !guests || !firstName || !lastName || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to complete your reservation.",
        variant: "destructive",
      });
      return;
    }

    // Insert data into Supabase
    const { data, error } = await supabase.from('reservations').insert([{
      date: selectedDate.toISOString().split('T')[0], // YYYY-MM-DD format
      time: selectedTime,
      guests: guests,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phoneNumber: phone.trim(),
      specialRequests: specialRequests.trim() || null,
    }]);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Reservation Confirmed! 🎉",
      description: `Your table for ${guests} guests on ${selectedDate.toLocaleDateString()} at ${selectedTime} has been confirmed. We've sent a confirmation email to ${email}.`,
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime('');
    setGuests('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    setIsOpen(false);
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl gradient-text">
            Reserve Your Table
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Date & Time Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold mb-4 flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-spice-paprika" />
                  Select Date & Time
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Choose Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
                      className="rounded-md border mt-2"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Time
                      </Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="guests" className="text-sm font-medium flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Guests
                      </Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {guestOptions.map((num) => (
                            <SelectItem key={num} value={num}>
                              {num} {num === '1' ? 'Guest' : 'Guests'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-spice-paprika" />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="requests" className="text-sm font-medium">
                      Special Requests (Optional)
                    </Label>
                    <textarea
                      id="requests"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Any dietary restrictions or special requests?"
                      className="mt-2 w-full rounded-md border p-2 resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button type="submit" className="w-full md:w-auto bg-spice-paprika hover:bg-spice-paprika-dark text-white font-semibold">
            Confirm Reservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
