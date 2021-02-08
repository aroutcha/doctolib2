using System;
using System.Collections.Generic;
using System.Text;

namespace ApiDoctolib.Models
{
    public class Patient
    {
        private int id;
        private string nom;
        private string adresse;
        private DateTime dateNaissance;
        private string sexePatient;

        public int Id { get => id; set => id = value; }
        public string Nom { get => nom; set => nom = value; }
        public string Adresse { get => adresse; set => adresse = value; }
        public DateTime DateNaissance { get => dateNaissance; set => dateNaissance = value; }
        public string SexePatient { get => sexePatient; set => sexePatient = value; }
       

      

    }
}
