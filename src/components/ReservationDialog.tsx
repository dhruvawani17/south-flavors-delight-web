
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !guests || !firstName || !lastName || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to complete your reservation.",
        variant: "destructive",
      });
      return;
    }

    // Simulate reservation processing
    setTimeout(() => {
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
    }, 1000);
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
                      placeholder="Any dietary restrictions, special occasions, seating preferences..."
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-paprika focus:border-transparent"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary & Submit */}
          {selectedDate && selectedTime && guests && (
            <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-spice-paprika/20">
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold mb-3 text-gray-800">
                  Reservation Summary
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Date:</span>
                    <p className="text-gray-800">{selectedDate.toLocaleDateString()}</p>
                    {isWeekend(selectedDate) && (
                      <p className="text-xs text-spice-paprika">Weekend pricing applies</p>
                    )}
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Time:</span>
                    <p className="text-gray-800">{selectedTime}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Guests:</span>
                    <p className="text-gray-800">{guests} {guests === '1' ? 'Guest' : 'Guests'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Contact:</span>
                    <p className="text-gray-800">{firstName} {lastName}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-spice-gradient text-white hover:opacity-90"
            >
              Confirm Reservation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
