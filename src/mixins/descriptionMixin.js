const descriptionMixin = {
  computed: {
    description() {
      const genderInfo = this.character.gender !== 'n/a' ? `a ${this.character.gender}` : 'no gender';
      const birthInfo = this.character.birth_year !== 'n/a' ? `born in ${this.character.birth_year}` : 'with unknown birth';
      const hairInfo = this.character.hair_color !== 'n/a' ? `${this.character.hair_color} hair` : 'unknown hair';
      const skinInfo = this.character.skin_color !== 'n/a' ? `${this.character.skin_color} skin` : 'unknown skin color';
      const eyeInfo = this.character.eye_color !== 'n/a' ? `${this.character.eye_color} eyes` : 'unknown eyes';

      return `${genderInfo}, ${birthInfo} with ${hairInfo}, ${skinInfo} and ${eyeInfo}.`;
    },
  },
};

export default descriptionMixin;
