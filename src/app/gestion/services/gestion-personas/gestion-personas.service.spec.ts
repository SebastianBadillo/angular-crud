import { GestionPersonasService } from './gestion-personas.service';

describe('GestionPersonasService', () => {
  const service: GestionPersonasService = new GestionPersonasService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
