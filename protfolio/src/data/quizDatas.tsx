// quizData.ts
import { Quiz, Question, Answer } from "../interfaces.tsx/interfaces";

const countriesQuiz: Quiz = {
  id: 1,
  title: "Countries Quiz",
  questions: [
    {
      id: 1,
      text: "Цэргийн жинхэнэ алба гэж?",
      answers: [
        {
          id: 1,
          text: "Монгол Улсын иргэн цэргийн байгууллагад офицерын албан тушаалд цэргийн жинхэнэ алба хаахыг",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Монгол Улсын иргэн шашин шүтлэг, ёс зүйн болон энэ хуульд заасан бусад үндэслэлээр цэргийн албыг дүйцүүлэн хаахыг",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Монгол Улсын иргэн цэргийн байгууллагад цэргийн алба хаах үүргийг биеэр гүйцэтгэхийг",
          isCorrect: true,
        },
        {
          id: 4,
          text: "цэргийн байгууллагад цэргийн алба биеэр хааж байгаа Монгол Улсын иргэнийг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: "Цэргийн дүйцүүлэх алба гэж?",
      answers: [
        {
          id: 1,
          text: "Монгол Улсын иргэн цэргийн байгууллагад офицерын албан тушаалд цэргийн жинхэнэ алба хаахыг",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Монгол Улсын иргэн шашин шүтлэг, ёс зүйн болон энэ хуульд заасан бусад үндэслэлээр цэргийн албыг дүйцүүлэн хаахыг",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Монгол Улсын иргэн цэргийн байгууллагад цэргийн алба хаах үүргийг биеэр гүйцэтгэхийг",
          isCorrect: false,
        },
        {
          id: 4,
          text: "цэргийн байгууллагад цэргийн алба биеэр хааж байгаа Монгол Улсын иргэнийг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: "Офицерын алба гэж?",
      answers: [
        {
          id: 1,
          text: "Монгол Улсын иргэн цэргийн байгууллагад офицерын албан тушаалд цэргийн жинхэнэ алба хаахыг",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Монгол Улсын иргэн шашин шүтлэг, ёс зүйн болон энэ хуульд заасан бусад үндэслэлээр цэргийн албыг дүйцүүлэн хаахыг",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Монгол Улсын иргэн цэргийн байгууллагад цэргийн алба хаах үүргийг биеэр гүйцэтгэхийг",
          isCorrect: false,
        },
        {
          id: 4,
          text: "цэргийн байгууллагад цэргийн алба биеэр хааж байгаа Монгол Улсын иргэнийг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: "Жагсаал гэж юу вэ?",
      answers: [
        {
          id: 3,
          text: "хоёр ба түүнээс дээш цэргийн алба хаагч нэг нь нөгөөгийхөө дэргэд нэг шугамд, тогтоосон завсар авч, зэрэгцэн жагсахыг хэлнэ.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "жагсаалын баруун, зүүн төгсгөлүүдийг хэлнэ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "цэргийн алба хаагчид, анги, салбаруудыг явганаар буюу машинтайгаар нэгтгэн ажиллуулахын тулд дүрэмд тогтоосноор байрлуулахыг хэлнэ",
          isCorrect: true,
        },
        {
          id: 4,
          text: "цэргийн алба хаагчид, анги, салбарууд (машин)-ын өмнө талын дагуу хоорондын хэмжээг хэлнэ",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      text: "Эгнээ гэж юу вэ?",
      answers: [
        {
          id: 3,
          text: "хоёр ба түүнээс дээш цэргийн алба хаагч нэг нь нөгөөгийхөө дэргэд нэг шугамд, тогтоосон завсар авч, зэрэгцэн жагсахыг хэлнэ.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "жагсаалын баруун, зүүн төгсгөлүүдийг хэлнэ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "цэргийн алба хаагчид, анги, салбаруудыг явганаар буюу машинтайгаар нэгтгэн ажиллуулахын тулд дүрэмд тогтоосноор байрлуулахыг хэлнэ",
          isCorrect: false,
        },
        {
          id: 4,
          text: "цэргийн алба хаагчид, анги, салбарууд (машин)-ын өмнө талын дагуу хоорондын хэмжээг хэлнэ",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      text: "Үзүүр гэж юу вэ?",
      answers: [
        {
          id: 3,
          text: "хоёр ба түүнээс дээш цэргийн алба хаагч нэг нь нөгөөгийхөө дэргэд нэг шугамд, тогтоосон завсар авч, зэрэгцэн жагсахыг хэлнэ.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "жагсаалын баруун, зүүн төгсгөлүүдийг хэлнэ",
          isCorrect: true,
        },
        {
          id: 1,
          text: "цэргийн алба хаагчид, анги, салбаруудыг явганаар буюу машинтайгаар нэгтгэн ажиллуулахын тулд дүрэмд тогтоосноор байрлуулахыг хэлнэ",
          isCorrect: false,
        },
        {
          id: 4,
          text: "цэргийн алба хаагчид, анги, салбарууд (машин)-ын өмнө талын дагуу хоорондын хэмжээг хэлнэ",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      text: "Завсар гэж юу вэ?",
      answers: [
        {
          id: 3,
          text: "хоёр ба түүнээс дээш цэргийн алба хаагч нэг нь нөгөөгийхөө дэргэд нэг шугамд, тогтоосон завсар авч, зэрэгцэн жагсахыг хэлнэ.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "жагсаалын баруун, зүүн төгсгөлүүдийг хэлнэ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "цэргийн алба хаагчид, анги, салбаруудыг явганаар буюу машинтайгаар нэгтгэн ажиллуулахын тулд дүрэмд тогтоосноор байрлуулахыг хэлнэ",
          isCorrect: false,
        },
        {
          id: 4,
          text: "цэргийн алба хаагчид, анги, салбарууд (машин)-ын өмнө талын дагуу хоорондын хэмжээг хэлнэ",
          isCorrect: true,
        },
      ],
    },
    {
      id: 8,
      text: "Хоёр эгнээ жагсаал гэж юу вэ?",
      answers: [
        {
          id: 2,
          text: "цэргийн алба хаагчид нэг нь нөгөөгийнхөө дэргэд нэг шугамд, тогтоосон завсар авч зэрэгцэн жагсахыг хэлнэ",
          isCorrect: false,
        },
        {
          id: 3,
          text: "баруун, зүүн төгсгөлүүдийг хэлнэ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "урд эгнээнд байгаа цэргийн алба хаагчийн ар шилийг дараагийн эгнээнд байгаа цэргийн алба хаагч харж, нэг алхам зайтай жагсахыг хэлнэ.",
          isCorrect: true,
        },
        {
          id: 4,
          text: "анги, салбарууд нэг шугамд нэг буюу хоёр эгнээ, захирагчаас тогтоосон завсар авч жагсахыг хэлнэ",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      text: "Зай гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "цэргийн алба хаагчид, анги, салбарууд (машин)-ын гүн тийш хоорондын хэмжээг хэлнэ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "жагсаалын баруун, зүүн төгсгөлүүдийг хэлнэ",
          isCorrect: false,
        },
        {
          id: 3,
          text: "цэргийн алба хаагчид нэг нь нөгөөгийнхөө дэргэд нэг шугамд, тогтоосон завсар авч зэрэгцэн жагсахыг хэлнэ",
          isCorrect: false,
        },
        {
          id: 4,
          text: "ангийн салаа, ротын цувааны журмаар жагсаахыг хэлнэ",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      text: "Машины эгнээ гэж юу вэ?",
      answers: [
        {
          id: 2,
          text: "цэргийн алба хаагчдын нүүр хандсан талыг хэлнэ",
          isCorrect: false,
        },
        {
          id: 3,
          text: "баруун, зүүн төгсгөлүүдийг хэлнэ",
          isCorrect: false,
        },
        {
          id: 4,
          text: "хураангуй жагсаалыг ангийг салаа, ротын цувааны журмаар жагсаахыг хэлнэ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "машинуудыг нэгийг нь нөгөөгийнх нь дэргэд, нэг шугамд тогтоосон завсартайгаар зэрэгцүүлан байрлуулахыг хэлнэ",
          isCorrect: true,
        },
      ],
    },
    // Add more questions here if needed
  ],
};

const knowledgeQuiz: Quiz = {
  id: 2,
  title: "Knowledge Quiz",
  questions: [
    {
      id: 1,
      text: "Монгол Улсын нийслэл ямар хот вэ?",
      answers: [
        {
          id: 1,
          text: "Улаанбаатар",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Дархан",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Эрдэнэт",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Өмнөговь",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: "Судар бичгийн хамгийн эртний хэл юу вэ?",
      answers: [
        {
          id: 1,
          text: "Хар шүрийн бичиг",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Мод бичгийн хэл",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Мэсопотамын клипт бичиг",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Шинэ бичгийн хэл",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: "Монголын анхны ерөнхийлөгч хэн байсан бэ?",
      answers: [
        {
          id: 1,
          text: "Чойбалсан",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Сүхбаатар",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Очирбат",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Сономжав",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: "Дэлхийн хамгийн өндөр уул аль нь вэ?",
      answers: [
        {
          id: 1,
          text: "Эверест",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Килиманжаро",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Монблан",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Аконкагуа",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      text: "Дэлхийн хамгийн том тэнгис юу вэ?",
      answers: [
        {
          id: 1,
          text: "Атлантын тэнгис",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Номхон тэнгис",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Энэтхэгийн тэнгис",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Номхон тэнгис",
          isCorrect: true,
        },
      ],
    },
    {
      id: 6,
      text: "Манай гаригийн хамгийн гүн нуур ямар нуур вэ?",
      answers: [
        {
          id: 1,
          text: "Далайн төв хэсгийн нуур",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Хүдэр нуур",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Байгаль нуур",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Тайм нуур",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      text: "Дэлхийн хамгийн их хүн амтай улс аль нь вэ?",
      answers: [
        {
          id: 1,
          text: "Хятад",
          isCorrect: true,
        },
        {
          id: 2,
          text: "АНУ",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Орос",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Япон",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      text: "Монгол Улсын үндэстний хүнс юу вэ?",
      answers: [
        {
          id: 1,
          text: "Сүү, цагаан идээ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Мах",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Будаа",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Тамхи",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      text: "Морин хуур ямар төрлийн хөгжмийн зэмсэг вэ?",
      answers: [
        {
          id: 1,
          text: "Магтуу хөгжим",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Махан хөгжим",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Хуур хөгжмийн зэмсэг",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Хайрцаг хөгжим",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      text: "Улаанбаатар хотын төв цэг хаана байрладаг вэ?",
      answers: [
        {
          id: 1,
          text: "Сүхбаатарын талбай",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Чингис хааны талбай",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Монголын Үндэсний музей",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Улаанхуаран",
          isCorrect: false,
        },
      ],
    },
  ],
};

const MathQuiz: Quiz = {
  id: 2,
  title: "Math Quiz",
  questions: [
    {
      id: 1,
      text: "Атом бөмбөг ямар төрлийн зэвсэг вэ?",
      answers: [
        {
          id: 1,
          text: "Цөмийн зэвсэг",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Химийн зэвсэг",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Буудлагын зэвсэг",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Миний зэвсэг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: "М16 винтовка ямар төрлийн зэвсэг вэ?",
      answers: [
        {
          id: 1,
          text: "Буу",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Автомат",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Ракет",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Химийн зэвсэг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: "AK-47 нь ямар улс руу хамаарагддаг вэ?",
      answers: [
        {
          id: 1,
          text: "Орос",
          isCorrect: true,
        },
        {
          id: 2,
          text: "АНУ",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Хятад",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Итали",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: "Снайперийн винтовка гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Тодорхой зайнаас өндөр нарийвчлалтай бууддаг зэвсэг",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Тулалдааны зэвсэг",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Шатамхай зэвсэг",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Галт зэвсэг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      text: "Модон буу ямар төрлийн зэвсэг вэ?",
      answers: [
        {
          id: 1,
          text: "Тулалдааны зэвсэг",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Далд зэвсэг",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Сайжруулсан зэвсэг",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Тоног төхөөрөмж",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      text: "Том жинтэй пулемёт ямар зэвсэг вэ?",
      answers: [
        {
          id: 1,
          text: "Автомат буу",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Ракет",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Пулемёт",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Снайперийн винтовка",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      text: "Ракетны систем гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Зэвсгийн нэг төрөл",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Галт зэвсэг",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Буудлагын зэвсэг",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Далд зэвсэг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      text: "Гар бууны гол зорилго юу вэ?",
      answers: [
        {
          id: 1,
          text: "Хамгаалах, ойрын зайн буудлагад",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Газар дээр буудлагын зэвсэг",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Том жинтэй зэвсэг",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Тулалдааны зэвсэг",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      text: "Калашниковын автомат (AK-47) ямар төрлийн зэвсэг вэ?",
      answers: [
        {
          id: 1,
          text: "Буу",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Автомат винтовка",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Ракетны систем",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Пулемёт",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      text: "Сөрөг халдлага хийхэд ашиглагддаг зэвсэг юу вэ?",
      answers: [
        {
          id: 1,
          text: "Галт зэвсэг",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Тэсрэх бөмбөг",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Пулемёт",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Ракет",
          isCorrect: false,
        },
      ],
    },
  ],
};

const scienceQuiz: Quiz = {
  id: 3,
  title: "Science Quiz",
  questions: [
    {
      id: 1,
      text: "Хүн биеийн аль хэсэгт хамгийн олон яс байдаг вэ?",
      answers: [
        {
          id: 1,
          text: "Гар",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Хөлийн хуруу",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Суганы яс",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Хүзүү",
          isCorrect: true,
        },
      ],
    },
    {
      id: 2,
      text: "Эрдэмтэд дэлхийн хамгийн том далайг юу гэж нэрлэдэг вэ?",
      answers: [
        {
          id: 1,
          text: "Атлант",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Хойд мөсөн далай",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Номхон далай",
          isCorrect: true,
        },
        {
          id: 4,
          text: " Энэтхэг далай",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: "Химийн элементүүдийн хүснэгтэд хамгийн анхны элемент нь юу вэ?",
      answers: [
        {
          id: 1,
          text: "Гелий",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Карбон",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Устөрөгч",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Төмөр",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: "Шинжлэх ухаанд зарим нэгдлийг химийн холбоо гэж юуг нэрлэдэг вэ?",
      answers: [
        {
          id: 1,
          text: "Атом",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Молекул",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Ион",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Ишлэл",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      text: "Ямар гэрэл нь хамгийн их энерги агуулдаг вэ?",
      answers: [
        {
          id: 1,
          text: "Улбар шар",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Цэнхэр",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Улаан",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Ногоон",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      text: "Гравитацийн хүчний гүйцэтгэдэг үүрэг юу вэ?",
      answers: [
        {
          id: 1,
          text: "Бодисыг шилжүүлэх",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Хүчтэй гүйдэл үүсгэх",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Бодисыг татах",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Дууны хурд нэмэгдүүлэх",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      text: "Цахилгаан соронзон орон ямар төрлийн энергийг агуулдаг вэ?",
      answers: [
        {
          id: 1,
          text: "Механик",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Химийн",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Цахилгаан",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Дулаан",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      text: "Нарны аймгийн хамгийн том гараг аль вэ?",
      answers: [
        {
          id: 1,
          text: "Марс",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Дэлхий",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Юпитер",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Сатурн",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      text: "Биологийн судалгаа ямар салбарт хамаарах вэ?",
      answers: [
        {
          id: 1,
          text: "Газарзүй",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Физик",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Химийн",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Амьд организмын судалгаа",
          isCorrect: true,
        },
      ],
    },
    {
      id: 10,
      text: "Организмын эсийн доторхи хамгийн жижиг нэгж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Гол",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Митохондри",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Цитоплазм",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Гидрат",
          isCorrect: false,
        },
      ],
    },
  ],
};

const historyQuiz: Quiz = {
  id: 4,
  title: "History Quiz",
  questions: [
    {
      id: 1,
      text: "Дэлхийн I дайн хэдэн онд өрнөсөн бэ?",
      answers: [
        {
          id: 1,
          text: "1914-1918 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1939-1945 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1900-1910 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1920-1930 он",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: "Дэлхийн II дайн хэдэн онд эхэлсэн бэ?",
      answers: [
        {
          id: 1,
          text: "1939 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1941 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1945 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1937 он",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: "Ази-Номхон далайн дайн хэдэн онд эхэлсэн бэ?",
      answers: [
        {
          id: 1,
          text: "1937 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1941 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1945 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1939 он",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: "Америкийн иргэний дайны үед холбоотнуудын гол командлагч хэн байсан бэ?",
      answers: [
        {
          id: 1,
          text: "Улисс С. Грант",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Роберт Ли",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Джордж Вашингтон",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Абрахам Линкольн",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      text: "Хааны Иргэний дайн хэдэн онд өрнөсөн бэ?",
      answers: [
        {
          id: 1,
          text: "1642-1651 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1660-1670 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1628-1640 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1688-1690 он",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      text: "Сталинградын тулаан хэдэн онд өрнөсөн бэ?",
      answers: [
        {
          id: 1,
          text: "1942-1943 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1944-1945 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1941-1942 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1939-1940 он",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      text: "Германын Панчжул (Panzer) гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Цэргийн тактик",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Танк",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Туршлагын шат",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Суулгац",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      text: "Америкийн эрх чөлөөний дайн хэдэн онд өрнөсөн бэ?",
      answers: [
        {
          id: 1,
          text: "1775-1783 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1800-1812 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1756-1763 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1791-1799 он",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      text: "Дэлхийн II дайн Монгол улсын хувьд хэдэн онд өрнөсөн бэ?",
      answers: [
        {
          id: 1,
          text: "1939-1945 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1941-1945 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1937-1941 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1945-1950 он",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      text: "Вьетнамын дайн хэдэн онд эхэлсэн бэ?",
      answers: [
        {
          id: 1,
          text: "1955 он",
          isCorrect: true,
        },
        {
          id: 2,
          text: "1964 он",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1960 он",
          isCorrect: false,
        },
        {
          id: 4,
          text: "1950 он",
          isCorrect: false,
        },
      ],
    },
  ],
};

const artQuiz: Quiz = {
  id: 5,
  title: "Art Quiz",
  questions: [
    {
      id: 1,
      text: "Зэвсэгт хүчний тактикийн 'Гурван шугамын тактик' гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Урт шугам, дунд шугам, богино шугам",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Гурван байршилд хуваагдсан хариуцлагын бүс",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Гурван үе шаттай хөдөлгөөн",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Гурван төрлийн зэвсэгийн хамтын ажиллагаа",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: "‘Туршлагын бүс’ тактикийн хувьд ямар арга хэмжээг агуулдаг вэ?",
      answers: [
        {
          id: 1,
          text: "Зэвсэгийн хяналт, нөхцөл байдлыг сайжруулах",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Сул талыг хязгаарлах",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Машины цувааг удирдах",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Агаарын давшилт",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: "‘Суурь хамгаалалтын тактик’ гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Энгийн хүчээр эсэргүүцэх",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Хамгаалагдсан байрлалд тогтмол байж, дайсны довтолгооны эсрэг хамгаалах",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Дайсны байрлалыг агаарын довтолгоо",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Гурван хэсэгт хуваагдсан хамгаалалт",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: "‘Манагерийн тактик’ гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Хөнгөн хөлөг онгоцны стратеги",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Агаарын хяналтын системийн стратеги",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Санаачлагатай менежментийн арга",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Цэргийн удирдлага, стратегийн зохион байгуулалт",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      text: "‘Хүчний тэнцвэрийн тактик’ гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Дайсны хүчийг тэнцвэржүүлэх арга",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Өөрийн хүчийг нэмэгдүүлэх арга",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Хамгаалалтын байрлал үүсгэх арга",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Дайсны хүчийг илүү хүнд болгох арга",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      text: "‘Тамхи өргөгч’ тактикийн хувьд юу юм бэ?",
      answers: [
        {
          id: 1,
          text: "Цэргийн хүний түүхий эдийн хангамж",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Дайсны гарын авлагын бүрэн хэмжээг задалж, янз бүрийн байрлалд тараах",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Цэргийн хөдөлгөөн, байршлын зохион байгуулалт",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Химийн дайны арга",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      text: "‘Бүх нийтийн маневр’ тактикийн хувьд юу хэрэгтэй вэ?",
      answers: [
        {
          id: 1,
          text: "Бүх талын мэдээллийг авах",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Өөрийн хүчийг байрлуулах",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Төлөвлөсөн бүсийн бүх хэсгийг хамгаалах",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Туршлагаас шалтгаалан хязгаарлах",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      text: "‘Туршлагын дайралт’ тактикийн хувьд ямар зүйлсийг оролцуулах вэ?",
      answers: [
        {
          id: 1,
          text: "Туршилт, тест",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Эсэргүүцлийн анхны хариу",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Цэрэг хөдөлгөх бэлтгэл",
          isCorrect: false,
        },
        {
          id: 4,
          text: "Агаарын довтолгоо, хариу",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      text: "‘Гурван үе шаттай хамгаалалт’ гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Дайсны ерөнхий зорилгоо зохион байгуулалт",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Дайсны довтолгооны эсрэг хариу арга хэмжээ",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Үе шат бүрээр хамгаалалт үүсгэх",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Үйл ажиллагааны олон хэлбэрийг хамарсан хамгаалалт",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      text: "‘Ашигтай байршил’ гэж юу вэ?",
      answers: [
        {
          id: 1,
          text: "Хуучин байрлал",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Дайсны хяналтгүй бүс",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Өөрийн цэргүүдийг хамгаалах боломжтой байрлал",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Зэвсгийн өндөр байрлал",
          isCorrect: false,
        },
      ],
    },
  ],
};

const quizData: Quiz[] = [
  countriesQuiz,
  knowledgeQuiz,
  scienceQuiz,
  historyQuiz,
  MathQuiz,
  artQuiz,
];

export default quizData;
