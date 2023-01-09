using System;

namespace CandidatesTracker.Data
{
    public class Candidate
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string TelephoneNumber { get; set; }
        public Status Status { get; set; }
        public string Notes { get; set; }
    }
}
