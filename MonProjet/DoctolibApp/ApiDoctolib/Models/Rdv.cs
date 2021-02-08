using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ApiDoctolib.Models
{
    public class Rdv
    {
        private int id;
        private int praticienId;
        private int patientId;
        private int numeroRdv;
        private DateTime dateRdv;
        private string heureRdv;
  

        public int Id { get => id; set => id = value; }
        public int NumeroRdv1 { get => numeroRdv; set => numeroRdv = value; }
        public DateTime DateRdv { get => dateRdv; set => dateRdv = value; }
        public string HeureRdv1 { get => heureRdv; set => heureRdv = value; }
       
        [ForeignKey("Praticien")]
        public int PraticienId { get => praticienId; set => praticienId = value; }
        [ForeignKey("Patient")]
        public int PatientId { get => patientId; set => patientId = value; }
        public Praticien Praticien { get; set; }
        public Patient Patient { get; set; }

    }
}
