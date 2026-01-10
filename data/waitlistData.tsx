import { Lock, Rocket, Gem } from 'lucide-react';

export const features = [
  {
    id: 1,
    icon: Lock,
    title: 'Ваши данные — только ваши',
    description:
      'Работаем локально, без передачи на внешние серверы. Сквозное шифрование и соответствие 152-ФЗ — адвокатская тайна под защитой.',
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Понимает российское право',
    description:
      'Обучен на судебных актах, кодексах и практике ВС РФ. Найдёт нужный прецедент и укажет на слабые места в позиции оппонента.',
  },
  {
    id: 3,
    icon: Gem,
    title: 'Встраивается в вашу работу',
    description:
      'Интеграция с КонсультантПлюс, Гарант и 1С. Работает там, где вы уже работаете — без переучивания и лишних окон.',
  },
];

export const backedByLogos = [
  {
    id: 1,
    name: 'Вектор Капитал',
    type: 'letter' as const,
    letter: 'V',
  },
  {
    id: 2,
    name: 'Lex Ventures',
    type: 'letter' as const,
    letter: 'L',
  },
  {
    id: 3,
    name: 'Цифра Инвест',
    type: 'icon' as const,
    icon: 'lightning',
  },
  {
    id: 4,
    name: 'Правовой Фонд',
    type: 'icon' as const,
    icon: 'bars',
  },
];
