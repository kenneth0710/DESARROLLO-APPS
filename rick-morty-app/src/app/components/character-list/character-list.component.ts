import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  private readonly characterService = inject(CharacterService);

  characters: Character[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  // Guarda los IDs de los personajes eliminados
  deletedCharacters = new Set<number>();

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(page: number = 1): void {
    this.loading = true;
    this.errorMessage = null;
    this.characterService.getCharacters(page).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.errorMessage = 'Hubo un error al cargar los personajes. Intente de nuevo.';
        this.loading = false;
      }
    });
  }

  deleteCharacter(id: number): void {
    this.deletedCharacters.add(id);
  }

  isDeleted(id: number): boolean {
    return this.deletedCharacters.has(id);
  }
}