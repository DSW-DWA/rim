import { Component, Input } from '@angular/core';
import { Vacancy } from '../interfaces';

@Component({
  selector: 'app-vacancy-info',
  templateUrl: './vacancy-info.component.html',
  styleUrls: ['./vacancy-info.component.scss'],
})
export class VacancyInfoComponent {
  @Input() showItem!: Vacancy;

  salary(item: Vacancy) {
    return item.salary || 'Не указана';
  }

  check(item: Vacancy) {
    return item.key_skills.length !== 0;
  }
}
