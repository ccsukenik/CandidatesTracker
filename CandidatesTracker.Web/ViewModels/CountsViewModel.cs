using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidatesTracker.Web.ViewModels
{
    public class CountsViewModel
    {
        public int PendingCount { get; set; }
        public int ConfirmedCount { get; set; }
        public int RejectedCount { get; set; }
    }
}
