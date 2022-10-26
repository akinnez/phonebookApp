using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using phonebookAPI.Data;
using phonebookAPI.Models;

namespace phonebookAPI.Controllers
{
    [Route("api/phonebook")]
    [ApiController]
    public class PhonebookController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;

        public PhonebookController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllContacts()
        {
            var allContacts = await _databaseContext.Phonebooks.ToListAsync();
            return Ok(allContacts); 
        }
        
        [HttpPost]
        public async Task<IActionResult> AddContacts([FromBody] PhonebookModel Contact)
        {
            if (Contact == null)
            {
                return NoContent();
            }
            if (Contact.FirstName == null || Contact.MobileNumber == 0 )
            {
                return BadRequest();
            }
            await _databaseContext.Phonebooks.AddAsync(Contact);
            await _databaseContext.SaveChangesAsync();
            return Ok(Contact); 
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetOneContact([FromRoute] Guid id)
        {
            var oneContact = await _databaseContext.Phonebooks
                                    .FirstOrDefaultAsync<PhonebookModel>(x => x.Id ==id);
            if (oneContact == null) return NotFound();
            return Ok(oneContact);  

        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateOneContact([FromRoute] Guid id, PhonebookModel updateContact)
        {
            var oneContact = await _databaseContext.Phonebooks.FindAsync(id);
            if (oneContact == null) return NotFound();
            if (updateContact == null) return BadRequest();
            oneContact.FirstName = updateContact.FirstName;
            oneContact.LastName = updateContact.LastName;
            oneContact.WorkNumber = updateContact.WorkNumber;
            oneContact.HomeNumber = updateContact.HomeNumber;
            oneContact.MobileNumber = updateContact.MobileNumber;
            oneContact.Facebook = updateContact.Facebook;   
            oneContact.HomeEmail = updateContact.HomeEmail;
            oneContact.WorkEmail = updateContact.WorkEmail;
            oneContact.OtherEmail = updateContact.OtherEmail;
            oneContact.Linkedin = updateContact.Linkedin;
            oneContact.MiddleName = updateContact.MiddleName;
            oneContact.Instagram = updateContact.Instagram;
            oneContact.Other = updateContact.Other;
            oneContact.Others = updateContact.Others;
            oneContact.WhatsApp = updateContact.WhatsApp;
            oneContact.TickTok = updateContact.TickTok;
            oneContact.Twitter = updateContact.Twitter;

            await _databaseContext.SaveChangesAsync();

            return Ok(oneContact);
        }

        [HttpDelete]
        
        public async Task<IActionResult> deleteMultipleContact([FromBody] List<Guid> ide)
        {
            if(ide == null || ide.Count == 0)
            {
                return BadRequest();
            }
            ide.ForEach(x =>
            {
                var oneContact =  _databaseContext.Phonebooks.Find(x);
                                  _databaseContext.Phonebooks.Remove(oneContact);
            });
               await _databaseContext.SaveChangesAsync();
                 var contact = await GetAllContacts();
            return Ok(contact); 
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteOneContact([FromRoute] Guid id)
        {
            var oneContact = await _databaseContext.Phonebooks.FindAsync(id);
            if (oneContact == null) return NotFound();

            _databaseContext.Phonebooks.Remove(oneContact);
            await _databaseContext.SaveChangesAsync();
            return Ok(oneContact);
        }
    }

}
