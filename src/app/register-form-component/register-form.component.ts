import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form-component',
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

}


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register-form',
//   templateUrl: './register-form.html',
//   styleUrls: ['./register-form.css']
// })
// export class RegisterFormComponent {
//   // Déclaration du formulaire
//   registerForm: FormGroup;

//   // Liste des rôles possibles
//   roles: string[] = ['Utilisateur', 'Administrateur', 'Modérateur'];

//   // Liste des préférences possibles
//   preferences: string[] = ['Voyage', 'Technologie', 'Sport', 'Musique', 'Lecture'];

//   constructor(private fb: FormBuilder) {
//     // Initialisation du formulaire avec ses champs + validations
//     this.registerForm = this.fb.group({
//       username: ['', [Validators.required, Validators.minLength(4)]],
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       telephone: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
//       role: ['', Validators.required],
//       preference: ['', Validators.required],
//     });
//   }

//   // Méthode appelée lors de la soumission
//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log("✅ Données du formulaire :", this.registerForm.value);
//       alert("Inscription réussie !");
//     } else {
//       alert("⚠️ Veuillez remplir correctement tous les champs.");
//     }
//   }
// }
