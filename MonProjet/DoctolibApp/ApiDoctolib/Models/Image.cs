using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ApiDoctolib.Models
{
    public class Image
    {
        private int id;
        private int praticienId;
        private string url;

        public int Id { get => id; set => id = value; }
        
        [ForeignKey("Praticien")]
        public int PraticienId { get => praticienId; set => praticienId = value; }
        public string Url { get => url; set => url = value; }

        [JsonIgnore]
        public Praticien Praticien { get; set; }


    }
}
