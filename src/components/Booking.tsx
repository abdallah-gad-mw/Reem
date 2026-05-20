import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, Star, Users, CheckCircle2, ChevronRight, Sparkles, Send } from "lucide-react";

export default function Booking() {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [bookingFormOpen, setBookingFormOpen] = useState(false);
  
  // Custom form state
  const [bookName, setBookName] = useState("");
  const [bookEmail, setBookEmail] = useState("");
  const [bookBrief, setBookBrief] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const availableDays = [
    { dayName: "Thu", dateStr: "May 21", slots: ["10:30 AM", "1:30 PM", "3:00 PM", "5:30 PM"] },
    { dayName: "Fri", dateStr: "May 22", slots: ["11:00 AM", "2:00 PM", "4:30 PM"] },
    { dayName: "Mon", dateStr: "May 25", slots: ["9:30 AM", "11:30 AM", "2:00 PM", "4:00 PM", "6:00 PM"] },
    { dayName: "Tue", dateStr: "May 26", slots: ["10:00 AM", "1:00 PM", "3:30 PM", "5:00 PM"] },
  ];

  const handleDaySelect = (index: number) => {
    setSelectedDayIndex(index);
    setSelectedTimeSlot(null);
    setBookingFormOpen(false);
  };

  const handleTimeSelect = (slot: string) => {
    setSelectedTimeSlot(slot);
    setBookingFormOpen(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookEmail) return;

    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);
    }, 1200);
  };

  const selectedDay = selectedDayIndex !== null ? availableDays[selectedDayIndex] : null;

  return (
    <section className="relative w-full max-w-[1100px] mx-auto px-6 py-24 text-white" id="booking">
      {/* Headings */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-mono tracking-widest text-[#e67e22] uppercase font-bold">
          Free Consultation
        </span>
        <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white mt-1">
          Book a Free Call
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
          Let’s Create Something Amazing — Book a Session Now!
        </p>
      </div>

      {/* Main interactive TidyCal design card */}
      <div className="max-w-[850px] mx-auto rounded-3xl overflow-hidden border border-[#222227] bg-[#111115] shadow-2xl">
        {/* Dark Top Area - Details */}
        <div className="p-6 md:p-8 border-b border-[#222227] bg-[#0c0c0f]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Header / Host details */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#1b1109] border border-[#e67e22]/20 flex items-center justify-center font-bold text-[#e67e22]">
                RM
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-base text-white">Reem Tech</h3>
                  <div className="flex items-center gap-0.5 text-xs text-amber-500">
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <span className="text-[10px] text-gray-400 font-mono ml-1">(2 reviews)</span>
                  </div>
                </div>
                <p className="text-xs text-[#e67e22] font-mono mt-0.5">web developer / AI Automation specialist</p>
              </div>
            </div>

            {/* Time Indicator */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono font-bold text-gray-300">
              <Clock className="h-3.5 w-3.5 text-[#e67e22]" />
              <span>30 Minute Strategy Call</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-400 leading-relaxed font-light max-w-2xl">
            Building a website shouldn't be stressful. Grab a coffee and let's have a casual 1-on-1 chat about your business needs. I'll answer your questions about design, automation, scope, and pricing to see if we're a perfect fit for a collaborative partnership.
          </p>
        </div>

        {/* Calendar Interaction Form Area (Light Blue Bottom / Steel Bottom Accent) */}
        <div className="relative bg-gradient-to-b from-[#131b2c] to-[#090d16] p-6 md:p-8 min-h-[340px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!bookingSuccess ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[#e67e22] uppercase tracking-wider font-mono">
                    {!bookingFormOpen ? "1. Select a Day" : `2. You Selected ${selectedDay?.dayName}, ${selectedDay?.dateStr} at ${selectedTimeSlot}`}
                  </h4>
                </div>

                {!bookingFormOpen ? (
                  <div>
                    {/* Choose Day Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {availableDays.map((day, idx) => (
                        <button
                          key={day.dateStr}
                          onClick={() => handleDaySelect(idx)}
                          className={`rounded-2xl p-4 border text-center transition-all ${
                            selectedDayIndex === idx
                              ? "bg-white border-white text-black font-semibold shadow-lg shadow-white/5"
                              : "bg-[#0b101b] border-white/10 text-gray-300 hover:border-white/30 hover:bg-[#12192a]"
                          }`}
                          id={`booking-day-${idx}`}
                        >
                          <span className="block text-xs uppercase tracking-wider font-mono opacity-60">
                            {day.dayName}
                          </span>
                          <span className="block text-lg font-bold mt-1">
                            {day.dateStr}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Choose Time Slots for selected day */}
                    {selectedDayIndex !== null && selectedDay && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6"
                      >
                        <h5 className="text-xs font-bold text-gray-400 mb-3 font-mono">Available slots on {selectedDay.dayName}, {selectedDay.dateStr}:</h5>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {selectedDay.slots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => handleTimeSelect(slot)}
                              className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-gray-200 hover:bg-white hover:text-black transition-all"
                              id={`booking-slot-${slot.replace(/\s/g, "-")}`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {selectedDayIndex === null && (
                      <div className="flex flex-col items-center justify-center py-6 text-center text-xs text-gray-400">
                        <Calendar className="h-8 w-8 text-white/20 mb-2" />
                        <p>Please select an upcoming digital slot to view local available times.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Booking Confirmation Mini Form */
                  <motion.form
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onSubmit={handleSubmitBooking}
                    className="space-y-4 max-w-lg"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={bookName}
                          placeholder="e.g. Alice"
                          onChange={(e) => setBookName(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                          id="booking-form-name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Your Email</label>
                        <input
                          type="email"
                          required
                          value={bookEmail}
                          placeholder="e.g. alice@company.com"
                          onChange={(e) => setBookEmail(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                          id="booking-form-email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Brief Project Idea</label>
                      <input
                        type="text"
                        value={bookBrief}
                        placeholder="e.g. SaaS redesign with WhatsApp chatbot auto-replies..."
                        onChange={(e) => setBookBrief(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                        id="booking-form-brief"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={isBooking}
                        className="rounded-xl bg-white px-6 py-3 text-xs font-bold text-black uppercase tracking-wider hover:bg-opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        id="confirm-booking-btn"
                      >
                        {isBooking ? "Scheduling Call..." : "Lock in Slot Now"}
                        <ChevronRight className="h-3 w-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setBookingFormOpen(false);
                          setSelectedTimeSlot(null);
                        }}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs hover:bg-white/10 transition-all text-gray-300"
                        id="cancel-booking-btn"
                      >
                        Change Time
                      </button>
                    </div>
                  </motion.form>
                )}
              </div>
            ) : (
              /* Success Stage */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight font-sans">
                  Video-session Confirmed!
                </h3>
                <p className="mt-2 text-xs text-gray-300 max-w-md">
                  We are booked for <span className="text-white font-semibold">{selectedDay?.dayName}, {selectedDay?.dateStr} at {selectedTimeSlot} (30 mins)</span>. Check your inbox <span className="font-semibold text-white">{bookEmail}</span> for calendar attachments.
                </p>

                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setBookingFormOpen(false);
                    setSelectedDayIndex(null);
                    setSelectedTimeSlot(null);
                    setBookName("");
                    setBookEmail("");
                    setBookBrief("");
                  }}
                  className="mt-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-2 text-xs text-gray-300 hover:text-white transition-colors"
                  id="reset-booking-test"
                >
                  Book Another Call
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Powered by TidyCal bar */}
        <div className="py-3.5 px-6 text-center bg-[#0a0a0d] border-t border-[#18181d] text-[10px] font-mono tracking-widest text-gray-500 flex items-center justify-center gap-1.5 uppercase">
          <span>Powered By</span>
          <span className="font-extrabold text-[#52bcfd]">TidyCal</span>
        </div>
      </div>
    </section>
  );
}
