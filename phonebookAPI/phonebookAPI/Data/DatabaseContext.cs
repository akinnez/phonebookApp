using Microsoft.EntityFrameworkCore;
using phonebookAPI.Models;

namespace phonebookAPI.Data
{
    public class DatabaseContext : DbContext
    {
         public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
        public DbSet<PhonebookModel> Phonebooks { get; set; }
    }
}
