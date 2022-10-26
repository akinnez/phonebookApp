using System.ComponentModel.DataAnnotations;
namespace phonebookAPI.Models
{
    public record PhonebookModel
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string SaveTo { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public long MobileNumber { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public long HomeNumber { get; set; }
        public long WorkNumber { get; set; }
        public long Other { get; set; }
        public string HomeEmail { get; set; }
        public string WorkEmail { get; set; }
        public string OtherEmail { get; set; }
        public string Facebook { get; set; }
        public long WhatsApp { get; set; }
        public string Twitter { get; set; }
        public string Instagram { get; set; }
        public string Linkedin { get; set; }
        public string TickTok { get; set; }
        public string Others { get; set; }
    }
}
