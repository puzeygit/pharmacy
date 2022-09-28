'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Treatments', 
      [
        { title: 'Арбидол максимум 200 мг 10 шт. капсулы', 
        img: 'https://images.apteka.ru/medium_75a921dc-e8e1-4e54-8308-21ff5250b4bc.webp', 
        price: 539.00, 
        body: `Показания
        Профилактика и лечение у взрослых и детей с 12 лет: грипп А и В, другие ОРВИ.
        Комплексная терапия рецидивирующей герпетической инфекции.
        Профилактика послеоперационных инфекционных осложнений.
        Комплексная терапия острых кишечных инфекций ротавирусной этиологии у детей стар-ше 12 лет.
        Способ применения и дозы
        Внутрь, до приема пищи.
        Разовая доза взрослым и детям старше 12 лет - 200 мг (1 капсула).
        Показание Схема приема
        препарата
        У взрослых и детей старше 12 лет:
        Неспецифическая профилактика в пе-риод эпидемии гриппа и других ОРВИ в разовой дозе
        2 раза в неделю в течение 3 недель.
        Неспецифическая профилактика при непосредственном контакте с больны-ми гриппом и дру-гими ОРВИ в разовой дозе
        1 раз в день в те-чение 10-14 дней.
        Лечение гриппа и других ОРВИ  в разовой дозе
        4 раза в сутки
        (каждые 6 часов) в течение 5 суток.`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Эргоферон 20 шт. таблетки для рассасывания', 
        img: 'https://images.apteka.ru/medium_fb16c512-d91d-43fa-ba30-451809269f59.webp', 
        price: 478.00, 
        body: `Показания
        Профилактика и лечение гриппа А и В.
        Профилактика и лечение острых респираторных вирусных инфекций, вызванных вирусом парагриппа, аденовирусом, респираторно-синцитиальным вирусом, коронавирусом.
        Профилактика и лечение герпесвирусных инфекций (лабиальный герпес, офтальмогерпес, генитальный герпес, ветряная оспа, опоясывающий герпес, инфекционный мононуклеоз).
        Профилактика и лечение острых кишечных инфекций вирусной этиологии (вызванных калицивирусом, аденовирусом, коронавирусом, ротавирусом, энтеровирусами).
        Профилактика и лечение энтеровирусного и менингококкового менингита, геморрагической лихорадки с почечным синдромом, клещевого энцефалита.
        Способ применения и дозы
        Внутрь, не во время приема пищи.  Таблетку следует держать во рту, не проглатывая, до полного растворения.
        Детям с 6 месяцев. При назначении препарата детям младшего возраста (от 6 месяцев до 3 лет) рекомендуется растворять таблетку в небольшом количестве (1 столовая ложка) кипяченой воды комнатной температуры.
        В 1-й день лечения принимают 8 таблеток по следующей схеме: по 1 таблетке каждые 30 минут в первые 2 часа (всего 5 таблеток за 2 часа), затем в течение этого же дня принимают еще по 1 таблетке 3 раза через равные промежутки времени. На 2-ой день и далее принимают по 1 таблетке 3 раза в день до полного выздоровления.
        Для профилактики вирусных инфекционных заболеваний - по 1-2 таблетки в день. Рекомендуемая продолжительность профилактического курса определяется индивидуально и может составлять 1-6 месяцев.`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Осельтамивир-акрихин 75 мг 10 шт. капсулы', 
        img: 'https://images.apteka.ru/medium_c4283b3c-9eff-4b1e-af9f-dfeb6fe53930.webp', 
        price: 545.00, 
        body: `Показания
        Лечение гриппа у взрослых и детей в возрасте старше 1 года.
        Профилактика гриппа у взрослых и подростков в возрасте старше 12 лет, находящихся в группах повышенного риска инфицирования вирусом (в воинских частях и больших производственных коллективах, у ослабленных больных).
        Профилактика гриппа у детей старше 1 года.
        Способ применения и дозы
        Внутрь, во время еды или независимо от приема пищи. Переносимость препарата можно улучшить, если принимать его во время еды.
        Лечение
Прием препарата необходимо начинать не позднее 2 суток с момента развития симптомов заболевания.
Взрослые и подростки в возрасте ≥ 12 лет
По 75 мг 2 раза в сутки внутрь в течение 5 дней. Увеличение дозы более 150 мг/сутки не приводит к усилению эффекта.
Дети с массой тела >40 кг или в возрасте от 8 до 12 лет
Дети, которые умеют проглатывать капсулы, также могут получать лечение, принимая по одной капсуле 75 мг 2 раза в сутки в течение 5 дней.
Дети в возрасте от 1 года до 8 лет
Возможно применение суспензии, приготовленной экстемпорально.
Профилактика
Прием препарата необходимо начинать не позднее 2 суток после контакта с больными.
Взрослые и подростки в возрасте ≥ 12 лет
По 75 мг 1 раз в сутки внутрь в течение не менее 10 дней после контакта с больным. Во время сезонной эпидемии гриппа - по 75 мг 1 раз в сутки в течение 6 недель. Профилактическое действие продолжается столько, сколько длится прием препарата.
Дети в возрасте от 8 до 12 лет
Принимать по одной капсуле 75 мг 1 раз в сутки в течение 10 дней.
Дети в возрасте от 1 года до 8 лет
Возможно применение суспензии, приготовленной экстемпорально .`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Ремантадин 50 мг 20 шт. таблетки', 
        img: 'https://images.apteka.ru/medium_734c992f-6c18-482f-af8f-5a1f2588cceb.webp', 
        price: 79.00, 
        body: `Показания
        Раннее лечение и профилактика гриппа А у взрослых и детей старше 7 лет.
        Способ применения и дозы
Ремантадин® принимают внутрь (после еды), запивая водой.
Лечение гриппа следует начинать в течение 24-48 ч после проявления симптомов болезни. Взрослым в первый день по 100 мг 3 раза в день; во второй и третий дни по 100 мг 2 раза в день; в четвертый и пятый день 100 мг один раз в день. В первый день терапии возможно применение препарата однократно в дозе 300 мг.
Детям в возрасте от 7 до 10-ти лет назначают по 50 мг 2 раза в день; от 10 до 14 лет - 50 мг 3 раза в день; старше 14 лет - дозы для взрослых. Курс 5 дней.
Для профилактики гриппа: у взрослых по 50 мг 1 раз в день в течение до 30-ти дней; у детей старше 7 лет по 50 мг 1 раз в день до 15 дней в зависимости от эпидемиологической обстановки.
Для лечения и профилактики гриппа при тяжелой печеночной недостаточности, эпилепсии, пожилым пациентам 100 мг 1 раз в день.
`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Кагоцел 12 мг 10 шт. таблетки', 
        img: 'https://images.apteka.ru/medium_63323bef-abea-47f5-a5bb-56d4ace3987d.webp', 
        price: 295.00, 
        body: `Показания
        Препарат Кагоцел применяют у взрослых и детей в возрасте от 3 лет в качестве профилактического и лечебного средства при гриппе и других острых респираторных вирусных инфекциях (ОРВИ), а также как лечебное средство при герпесе у взрослых.
        Способ применения и дозы
Внутрь, независимо от приема пищи.
Для лечения гриппа и ОРВИ взрослым назначают в первые два дня - по 2 таблетки 3 раза в день, в последующие два дня - по одной таблетке 3 раза в день. Всего на курс - 18 таблеток, длительность курса - 4 дня.
Профилактика гриппа и ОРВИ у взрослых проводится 7-дневными циклами: два дня - по 2 таблетки 1 раз в день, 5 дней перерыв, затем цикл повторить. Длительность профилактического курса - от одной недели до нескольких месяцев.
Для лечения герпеса у взрослых назначают по 2 таблетки 3 раза в день в течение 5 дней. Всего на курс - 30 таблеток, длительность курса - 5 дней.
Для лечения гриппа и ОРВИ детям в возрасте от 3 до 6 лет назначают в первые два дня - по 1 таблетке 2 раза в день, в последующие два дня - по одной таблетке 1 раз в день. Всего на курс - 6 таблеток, длительность курса - 4 дня.
Для лечения гриппа и ОРВИ детям в возрасте от 6 лет назначают в первые два дня - по 1 таблетке 3 раза в день, в последующие два дня - по одной таблетке 2 раза в день. Всего на курс - 10 таблеток, длительность курса - 4 дня.
Профилактика гриппа и ОРВИ у детей в возрасте от 3 лет проводится 7- дневными циклами: два дня - по 1 таблетке 1 раз в день, 5 дней перерыв, затем цикл повторить. Длительность профилактического курса - от одной недели до нескольких месяцев.`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Рафамин 20 шт. таблетки для рассасывания', 
        img: 'https://images.apteka.ru/medium_d5a1adfe-7ca9-4f09-af15-52b05a560a98.webp', 
        price: 609.00, 
        body: `Показания
        Лечение острых респираторных вирусных инфекций у взрослых пациентов.
        Способ применения и дозыю 
        Принимать внутрь - не во время приема пищи. Таблетку держать во рту до полного растворения.
В 1-й день лечения принимают 8 таблеток по следующей схеме: по 1 таблетке каждые 30 минут в первые 2 часа (всего 5 таблеток за 2 часа), затем в течение этого же дня принимают еще по 1 таблетке 3 раза через равные промежутки времени. На 2-ой день и далее принимают по 1 таблетке 3 раза в день. Длительность лечения составляет 5 дней.
При отсутствии положительного эффекта от проводимой в течение 5 дней терапии препаратом или ухудшении состояния следует обратиться к врачу.`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Генферон лайт спрей назальный', 
        img: 'https://images.apteka.ru/medium_f3dfcd01-1c7a-4ffc-b0fe-92be2bef88b9.webp', 
        price: 511.00, 
        body: `Показания
        Профилактика и лечение гриппа и ОРВИ у взрослых и детей старше 14 лет.
        Способ применения и дозы
        Препарат применяют интраназально путем аэрозольного введения 1 дозы (1 доза = 1 короткое нажатие на дозатор).
        При первых признаках заболевания Генферон® лайт вводят интраназально в течение 5 дней по одной дозе (одно нажатие на дозатор) в каждый носовой ход 3 раза в день (одна доза приблизительно составляет 50 000 МЕ интерферона альфа, суточная не должна превышать 500 000 МЕ).
        При контакте с больным ОРВИ и/или при переохлаждении препарат вводят по указанной схеме 2 раза в день в течение 5-7 дней. При необходимости профилактические курсы повторяют.
        Во избежание распространения инфекции рекомендовано индивидуальное использование.`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Ингавирин 60 мг 10 шт. капсулы', 
        img: 'https://images.apteka.ru/medium_3976a96b-e8a5-4d0c-8ac8-814526552cfb.webp', 
        price: 670.97, 
        body: `Показания
        Лечение гриппа А и В и других острых респираторных вирусных инфекций (аденовирусная инфекция, парагрипп, респираторно-синцитиальная инфекция) у детей от 7 до 17 лет.
        Профилактика гриппа А и В и других острых респираторных вирусных инфекций у детей от 7 до 17 лет.
        Способ применения и дозы
        Внутрь. Независимо от приема пищи.
        Для лечения гриппа и острых респираторных вирусных инфекций детям от 7 до 17 лет назначают по 1 капсуле (60 мг) 1 раз в день. Длительность лечения 5-7 дней (в зависимости от тяжести состояния). Прием препарата начинают с момента появления первых симптомов заболевания, желательно не позднее 2 суток от начала болезни.
       Для профилактики гриппа и острых респираторных вирусных инфекций после контакта с больными лицами детям от 7 до 17 лет назначают по 1 капсуле (60 мг) 1 раз в день, в течение 7 дней.`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Орвирем 2 мг/мл сироп 100 мл флакон', 
        img: 'https://images.apteka.ru/medium_097c0ef5-5d70-43b1-8a2b-c1381674ca53.webp', 
        price: 367.00, 
        body: `Показания
        Профилактика и раннее лечение гриппа А у детей старше 1 года.
        Профилактика, римантадином может быть эффективна при контактах с заболевшими дома, при распространении инфекции в замкнутых коллективах и при высоком риске возникновения заболевания во время эпидемии гриппа.`, 
        category: 'Противовирусные препараты', 
        isEmpty: false},

        { title: 'Стрепсилс с витамином с 24 шт. таблетки для рассасывания вкус апельсин', 
        img: 'https://images.apteka.ru/medium_3d88893f-65da-48c6-8fb8-cad4b520163e.webp', 
        price: 272.00, 
        body: `Показания
        Симптоматическое лечение боли в горле при инфекционно-воспалительных заболеваниях.
        Способ применения и дозы
Внимательно прочтите инструкцию перед приемом препарата.
Местно. Дети в возрасте 6-18 лет: рассасывать по одной таблетке каждые 4 часа.
Не принимать более 5 таблеток в течение 24 часов.
Взрослые старше 18 лет: рассасывать по одной таблетке каждые 2-3 часа. Не принимать более 8 таблеток в течение 24 часов.
Не превышайте указанную дозу.
Продолжительность курса лечения - не более 3 дней. Если при приеме препарата
в течение 3 дней симптомы сохраняются, необходимо прекратить лечение и обратиться
к врачу.
`, 
        category: 'Препараты от боли в горле', 
        isEmpty: false},

        { title: 'Фарингосепт 10 мг 10 шт. таблетки для рассасывания', 
        img: 'https://images.apteka.ru/medium_526d1768-691e-4cae-9911-42bb32c105c5.webp', 
        price: 235.00, 
        body: `Показания
        - симптоматическое лечение инфекционно-воспалительных заболеваний полости рта и глотки (тонзиллит,ларингит, фарингит, гингивит, стоматит);
        - профилактика инфекций полости рта в периоперационный период (тонзилэктомия, удаление зуба);
        - профилактика профессионального ларингита.
        Способ применения и дозы
Местно. Таблетки следует рассасывать до полного растворения, через 15–30 мин после еды. После применения таблеток в течение 3 ч следует воздерживаться от питья и приема пищи.
Взрослым — по 4–5 табл. (0,04–0,05 г) в сутки.
Детям от 3 до 7 лет — 3 табл. (0,03 г) в сутки. Курс лечения — 3–4 дня.`, 
        category: 'Препараты от боли в горле', 
        isEmpty: false},

        { title: 'Ингалипт аэрозоль для местного применения 30 мл', 
        img: 'https://images.apteka.ru/medium_50858f2d-0daf-467f-80b3-71e270673d8d.webp', 
        price: 120.00, 
        body: `Показания
        - симптоматическое лечение инфекционно-воспалительных заболеваний полости рта и глотки (тонзиллит,ларингит, фарингит, гингивит, стоматит);
        - профилактика инфекций полости рта в периоперационный период (тонзилэктомия, удаление зуба);
        - профилактика профессионального ларингита.
        Способ применения и дозы
Местно. Сняв предохранительный колпачок с флакона и надев прилагаемый распылитель, распыляют взвесь в полость рта 1-2 секунды. Препарат удерживают в полости рта 5-7 минут. Орошение проводится 3-4 раза в сутки с предварительным прополаскиванием рта кипяченой водой.
Во избежание закупорки отверстия распылителя по окончаний манипуляции его необходимо продуть или поместить в стакан с чистой водой.
При использовании баллон следует держать строго вертикально.`, 
        category: 'Препараты от боли в горле', 
        isEmpty: false},

        { title: 'Линаква форте средство для промывания полости рта и горла аэрозоль 125 мл', 
        img: 'https://images.apteka.ru/medium_729c994e-1c75-4b8d-867f-db9e6e5d2ad1.webp', 
        price: 478.00, 
        body: `Показания
        Для детей с 2-х лет и взрослых:
        - для профилактики и комплексного лечения острых и хронических, инфекционных и воспалительных заболеваний горла:
        - тонзиллит
        - аденоидит
        - фарингит
        - ларингит;
        - для профилактики и комплексного лечения ОРВИ;
        - для подготовки слизистой горла к применению лекарст-
        венных средств;
        - пациентам, страдающим сухостью слизистой оболочки задней стенки глотки вследствие повышенной сухости или загрязнения воздуха (центральное отопление, кондиционирование) с целью сохранения физиологических характеристик слизистой оболочки горла в измененных микроклиматических условиях.
        Способ применения и дозы
При комплексном лечении и профилактике: промывание полости рта и горла 4-6 раз в сутки по 3-4 впрыскивания, направляя распылитель на заднюю стенку глотки.
Длительность и кратность применения препарата не ограничены.`, 
        category: 'Препараты от боли в горле', 
        isEmpty: false},

        { title: 'Аквалор горло с алоэ вера и ромашкой римской 150 мл', 
        img: 'https://images.apteka.ru/medium_c70ff08a-6390-480f-b4c9-761b910bbb34.webp', 
        price: 556.00, 
        body: `Показания
        1. Профилактика и комплексное лечение острых и хронических воспалительных заболеваний полости рта и горла (инфекционных, аллергических, атрофических):
        - острые и хронические фарингиты;
        - острые тонзиллиты (ангина);
        - хронические тонзиллиты;
        - ларингиты;
        - стоматиты;
        - гингивиты;
        - пародонтиты.
        2. Профилактика и комплексное лечение респираторных инфекций (гриппа, ОРВИ и др.).
        3. Профилактика и комплексное лечение состояний после хирургических вмешательств в полости рта и в горле.
        Средство предназначено для детей с 6 месяцев и взрослых.
        Способ применения и дозы
        Промывание полости носа проводят по мере необходимости, в среднем 3-4 раза в день, при необходимости чаще.
        Для детей старше 2-х лет и взрослых.
Промывание носа у детей и взрослых проводят при вертикальном положении тела (сидя или стоя). При этом голова должна располагаться прямо и быть несколько наклонена вперед. Следите за тем, чтобы во время промывания голова не была запрокинута назад
1.Вставьте наконечник баллона в правую половину носа
2.Нажмите на распылитель и удерживайте в течение нескольких секунд, таким образом промывая правую половину носа
3.Удалите остатки промывающей жидкости путем высмаркивания или с помощью аспиратора (при необходимости у детей)
4.Проведите аналогичную процедуру с левой половиной носа.
5.При необходимости повторите процедуру.
Методы и средства очистки
После каждого использования средства промыть анатомическую насадку теплой водой с мылом и затем ополоснуть.`, 
        category: 'Препараты от боли в горле', 
        isEmpty: false},

        { title: 'Стиллавит раствор для ухода за глазами 10 мл', 
        img: 'https://images.apteka.ru/medium_6cfd57de-4ba1-48b9-81a5-32c63d7c767d.webp', 
        price: 584.00, 
        body: `Показания
        - чувство дискомфорта, «сухости», инородного тела, зуда и жжения в глазах;
        - раздражение глаз, под воздействием климатических факторов, пыли, табачного дыма, яркого света;
        - дискомфорт при ношении всех типов контактных линз (мягких, жестких, силикон-гидрогелевых и ортокератологических); 
        - усталость глаз при интенсивной зрительной нагрузке (при длительной работе с компьютером и времяпрепровождении перед телевизором, при управлении автотранспортом в ночное время и т.д.).`, 
        category: 'Офтальмологические препараты', 
        isEmpty: false},

        { title: 'Артелак всплеск 10 мл флакон', 
        img: 'https://images.apteka.ru/medium_bbba615f-4f86-4301-8219-66f48208c543.webp', 
        price: 529.00, 
        body: `Показания
        Для интенсивного и длительного увлажнения передней поверхности глаза (роговицы и конъюнткивы) при:
        - сухости глаз, вызванной образом жизни, стрессовыми нагрузками на глаза, воздействием факторов окружающей среды, таких как длительная работа за компьютером и, как следствие, редкое моргание, пребывание в помещении с кондиционированным воздухом, сигаретный дым, сильный ветер;
        - при выраженной сухости глаз, вызванной системными заболеваниями, оперативными вмешательствами на глазах или приемом некоторых лекарственных препаратов, таких как противозачаточные средства, антигистаминные препараты, бета-адреноблокаторы, спазмолитики, диуретики.
        - для устранения дискомфорта при ношении жестких и мягких контактных линз.
        Способ применения и дозы
Артелак рекомендуется закапывать в конъюнктивальный мешок каждого глаза по 1 капле по мере необходимости.
Благодаря специально разработанному нагнетательному механизму флакона раствор остается стерильным без консервантов.
1. Всякий раз перед применением раствора необходимо снимать защитный колпачок флакона. Не следует касаться пальцами кончика флакона.
2. Поместить большой и указательный пальцы на круглую пластинку дозатора возле кончика флакона, а мизинец положить на дно флакона. Пальцами, которые расположены посередине, можно поддерживать флакон по бокам в вертикальном положении. Слегка нажать на пластину дозатора. После этого необходимо закрыть глаза и медленно поводить глазами во все стороны, чтобы капля распределилась по поверхности глаза.
3. Перед первым применением нагнетающего устройства необходимо нажать на пластинку дозатора около 7 раз, прежде чем появится первая капля. Следует держать флакон так, как это показано на рисунке.
4. Чтобы закапать раствор, следует наклонить голову назад и удерживать флакон над глазом так, как удобно. Осторожно оттянуть нижнее веко пальцем свободной руки, удерживая флакон.
5. Можно помогать себе другой рукой для большей точности, если это необходимо. Не следует допускать прикосновения кончика флакона к глазу или прикасаться к кончику флакона пальцами для предотвращения загрязнения раствора.`, 
        category: 'Офтальмологические препараты', 
        isEmpty: false},

        { title: 'Вита-пос средство офтальмологическое 5 гр', 
        img: 'https://images.apteka.ru/medium_3dadcf29-1be2-4449-a1bf-0738b79a2edc.webp', 
        price: 246.00, 
        body: `Показания
        -Для улучшения состояния слезной пленки и защиты глазной поверхности;
        -Для устранения дискомфорта при ощущении "сухости", чувстве инородного тела, жжении в глазах, в том числе возникающих под воздействием:
        Климатических факторов, таких как, кондиционированный воздух в автомобиле, в самолете; ветер, холод, интенсивное солнечное излучение, экологически нездоровый воздух или сигаретный дым;
        Интенсивной зрительной нагрузки, например, при длительной работе с компьютером, фотокамерой, при чрезмерном времяпрепровождении перед телевизором, необходимости управления автотранспортом в ночное время суток, при длительном ношении контактных линз.
        Способ применения и дозы
Рекомендуется закладывать полоску средства длиной 1см в конъюнктивальный мешок от 1 до 3 раз в день. Частота использования устанавливается индивидуально в зависимости от Ваших ощущений, образа жизни и согласно рекомендациям врача-офтальмолога.
Особенно эффективно использование ВитА-ПОС® перед ночным сном.
Не существует ограничений в отношении длительности применения средства ВитА- ПОС®. В случае, если после применения средства ВитА-ПОС® в течение нескольких дней предъявляемые Вами жалобы или дискомфорт сохраняются, пожалуйста, проконсультируйтесь с врачом-офтальмологлм.`, 
        category: 'Офтальмологические препараты', 
        isEmpty: false},

        { title: 'Sentiss гель для век блефаровит 15 мл', 
        img: 'https://images.apteka.ru/medium_6351e17f-f1c7-4bd5-8ae9-db7211e00f6c.webp', 
        price: 389.00, 
        body: `Показания
        Гель предназначен для гигиены области век, бровей и ресниц - ежедневный уход за веками и снятие отеков
        БЛЕФАРОВИТ ГЕЛЬ:
        - обеспечивают мягкость и эластичность кожи век
        - помогает в устранении отечности
        - интенсивно увлажняет, повышает упругость кожи век.
        Способ применения и дозы
Небольшое количество геля наносится на чистые веки и ресничный край век утром и вечером и массажными движениями втирается 1-2 минуты.`, 
        category: 'Офтальмологические препараты', 
        isEmpty: false},

        { title: 'Лоратадин-Тева, таблетки 10 мг 30 шт', 
        img: 'https://cdn.eapteka.ru/upload/offer_photo/250/569/1_5906851753a423cca1855053e6a155a4.png?t=1644481998&_cvc=1664357053', 
        price: 260.00, 
        body: `Показания
        - Сезонный (поллиноз) и круглогодичный аллергические риниты, аллергический конъюнктивит
        - Устранение симптомов, связанных с этими заболеваниями: чихания, зуда слизистой оболочки носа, ринореи, ощущения жжения и зуда в глазах, слезотечения;
        - Хроническая идиопатическая крапивница.
        Способ применения и дозы
        Внутрь, независимо от приема пищи.
Взрослым, в том числе пожилым и подросткам старше 12 лет по 10 мг 1 раз в день.
Дети от 3 до 12 лет:
с массой тела более 30 кг по 10 мг 1 раз в день;
с массой тела менее 30 кг по 5 мг 1 раз в день.
Продолжительность лечения зависит от продолжительности проявления симптоматики заболевания. Если состояние пациента не улучшается в течение 3 дней после начала лечения, значит лоратадин неэффективен.
При применении препарата у пожилых пациентов и у пациентов с наличием хронической почечной недостаточности коррекции дозы не требуется.
Взрослым и детям при массе тела более 30 кг с тяжелым нарушением функции печени начальная доза должна составлять 10 мг (1 таблетка) через день.`, 
        category: 'Препараты для лечения аллергии', 
        isEmpty: false},

        { title: 'Солонэкс, капли для приема внутрь 10 мг/мл 20 мл 1 шт', 
        img: 'https://cdn.eapteka.ru/upload/offer_photo/334/417/1_aa757b9555b17f197a827250b8dfdaa8.png?t=1657021237&_cvc=1664357053', 
        price: 203.00, 
        body: `Показания
        Применение препарата показано у взрослых и детей с 6 месяцев и старше для облегчения: 
        - назальных и глазных симптомов круглогодичного (персистирующего) и сезонного (интермиттирующего) аллергического ринита и аллергического конъюнктивита: зуда, чиханья, заложенности носа, ринореи, слезотечения, гиперемии конъюнктивы;
        - симптомов хронической идиопатической крапивницы.    
        Применение у детей от 6 до 12 месяцев возможно только по назначению врача и под строгим медицинским контролем.
        Способ применения и дозы
        Внутрь, накапать в ложку или растворить в воде. Количество воды для растворения препарата должно соответствовать количеству жидкости, которое пациент (особенно ребенок) в состоянии проглотить. Раствор следует принимать сразу после приготовления. Взрослые 10 мг (20 капель) 1 раз в день.
        Дети
Применение у детей от 6 до 12 месяцев возможно только по назначению врача и под строгим медицинским контролем.
Дети от 6 до 12 месяцев 2,5 мг (5 капель) 1 раз в день
Дети от 1 года до 6 лет 2,5 мг (5 капель) 2 раза в день.
Дети от 6 до 12 лет 5 мг (10 капель) 2 раза в день 
Дети старше 12 лет 10 мг (20 капель) 1 раз в день`, 
        category: 'Препараты для лечения аллергии', 
        isEmpty: false},

        { title: 'Цетиризин-Вертекс, таблетки 10 мг 30 шт', 
        img: 'https://cdn.eapteka.ru/upload/offer_photo/250/720/1_b5e318a3a440a62e88254f8d5279943d.png?t=1637639517&_cvc=1664357053', 
        price: 910.00, 
        body: `Показания
        Применение препарата показано у взрослых и детей с 6 лет для облегчения:   
        -  назальных и глазных симптомов круглогодичного (персистирующего) и сезонного (интермиттирующего) аллергического ринита и аллергического конъюнктивита, таких как зуд, чихание, заложенность носа, ринорея, слезотечение, гиперемия конъюнктивы;
        -  симптомов хронической идиопатической крапивницы.
        Способ применения и дозы
        Внутрь независимо от приема пищи не разжевывая и запивая достаточным количеством жидкости предпочтительно вечером.
Взрослым и детям в возрасте старше 6 лет (с массой тела более 30 кг) - по 1 таблетке один раз в день.`, 
        category: 'Препараты для лечения аллергии', 
        isEmpty: false},

        { title: 'Элидел, крем для наружного применения 1 % 15 г', 
        img: 'https://cdn.eapteka.ru/upload/offer_photo/206/577/1_46cf144ead9ee17a38e566c953536bd1.png?t=1644314591&_cvc=1664357053', 
        price: 344, 
        body: `Показания
        Атопический дерматит (экзема). Препарат показан для кратковременного и длительного лечения атопического дерматита у взрослых, подростков и детей (от 3 месяцев).
        Способ применения и дозы
      Лечение следует начинать при первых проявлениях заболевания для предотвращения резкого развития его обострения.
1% крем Элидел 2 раза в день наносят тонким слоем на пораженную поверхность и осторожно втирают до полного впитывания.
1% крем Элидел можно наносить на кожу любых частей тела, включая голову, лицо, шею, а также на области опрелостей.
Крем Элидел следует применять 2 раза в сутки, до полного исчезновения симптомов заболевания. При сохранении выраженности симптомов через 6 недель применения препарата необходимо провести повторное обследование пациента для подтверждения диагноза атопического дерматита. После прекращения лечения, во избежание последующих обострений, при первых признаках рецидива атопического дерматита терапию следует возобновить.`, 
        category: 'Препараты для лечения аллергии', 
        isEmpty: false},

        { title: 'Ибупрофен Велфарм, таблетки 400 мг 20 шт', 
        img: 'https://cdn.eapteka.ru/upload/offer_photo/470/143/1_4eefd4c6b5ba7f514c63e8577344fecc.png?t=1647776262&_cvc=1664357053', 
        price: 151.00, 
        body: `Показания
        Ибупрофен применяют при головной боли, мигрени, зубной боли, болезненных менструациях, невралгии, боли в спине, мышечной боли, ревматической боли и боли в суставах; а также при лихорадочном состоянии при гриппе и простудных заболеваниях.
        Способ применения и дозы`, 
        category: 'Обезбаливающие препараты', 
        isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

        // { title: '', 
        // img: '', 
        // price: , 
        // body: ``, 
        // category: '', 
        // isEmpty: false},

      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Treatments', null, {});
  }
};
