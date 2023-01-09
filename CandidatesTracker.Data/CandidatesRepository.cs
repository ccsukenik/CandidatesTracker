using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidatesTracker.Data
{
    public class CandidatesRepository
    {
        private readonly string _connectionString;

        public CandidatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate c)
        {
            using var context = new CandidatesContext(_connectionString);
            c.Status = Status.Pending;
            context.Candidates.Add(c);
            context.SaveChanges();
        }

        public List<Candidate> GetCandidatesByStatus(Status status)
        {
            using var context = new CandidatesContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        } 

        public Candidate GetCandidateByID(int id)
        {
            using var context = new CandidatesContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.ID == id);
        }

        public void UpdateCandidate(Candidate c, Status status)
        {
            using var context = new CandidatesContext(_connectionString);
            c.Status = status;
            context.Candidates.Update(c);
            context.SaveChanges();
        }

        public int GetCountByStatus(Status status)
        {
            using var context = new CandidatesContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).Count();
        }
    }
}
