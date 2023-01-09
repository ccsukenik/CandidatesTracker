using CandidatesTracker.Data;
using CandidatesTracker.Web.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidatesTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getcandidates")]
        public List<Candidate> GetCandidatesByStatus(Status status)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidatesByStatus(status);

        }

        [HttpGet]
        [Route("getcandidate")]
        public Candidate GetCandidateByID(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidateByID(id);
        }

        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate c)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.AddCandidate(c);
        }

        [HttpPost]
        [Route("confirmcandidate")]
        public void ConfirmCandidate(Candidate c)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.UpdateCandidate(c, Status.Confirmed);
        }

        [HttpPost]
        [Route("rejectcandidate")]
        public void RejectCandidate(Candidate c)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.UpdateCandidate(c, Status.Rejected);
        }

        [HttpGet]
        [Route("getcounts")]
        public CountsViewModel GetCounts()
        {
            var repo = new CandidatesRepository(_connectionString);
            return new CountsViewModel
            {
                PendingCount = repo.GetCountByStatus(Status.Pending),
                ConfirmedCount = repo.GetCountByStatus(Status.Confirmed),
                RejectedCount = repo.GetCountByStatus(Status.Rejected)
            };
        }
    }
}
