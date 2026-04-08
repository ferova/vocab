const VOCAB = [
  // Calendar: months
  { id: "month_1", topic: "Calendar", en: ["January"], kana: "いちがつ", jp: "1月", romaji: ["ichigatsu"] },
  { id: "month_2", topic: "Calendar", en: ["February"], kana: "にがつ", jp: "2月", romaji: ["nigatsu"] },
  { id: "month_3", topic: "Calendar", en: ["March"], kana: "さんがつ", jp: "3月", romaji: ["sangatsu"] },
  { id: "month_4", topic: "Calendar", en: ["April"], kana: "しがつ", jp: "4月", romaji: ["shigatsu"] },
  { id: "month_5", topic: "Calendar", en: ["May"], kana: "ごがつ", jp: "5月", romaji: ["gogatsu"] },
  { id: "month_6", topic: "Calendar", en: ["June"], kana: "ろくがつ", jp: "6月", romaji: ["rokugatsu"] },
  { id: "month_7", topic: "Calendar", en: ["July"], kana: "しちがつ", jp: "7月", romaji: ["shichigatsu"] },
  { id: "month_8", topic: "Calendar", en: ["August"], kana: "はちがつ", jp: "8月", romaji: ["hachigatsu"] },
  { id: "month_9", topic: "Calendar", en: ["September"], kana: "くがつ", jp: "9月", romaji: ["kugatsu"] },
  { id: "month_10", topic: "Calendar", en: ["October"], kana: "じゅうがつ", jp: "10月", romaji: ["juugatsu", "jugatsu"] },
  { id: "month_11", topic: "Calendar", en: ["November"], kana: "じゅういちがつ", jp: "11月", romaji: ["juuichigatsu", "juichigatsu"] },
  { id: "month_12", topic: "Calendar", en: ["December"], kana: "じゅうにがつ", jp: "12月", romaji: ["juunigatsu", "junigatsu"] },

  // Calendar: days of week
  { id: "dow_1", topic: "Calendar", en: ["Monday"], kana: "げつようび", jp: "月曜日", romaji: ["getsuyoubi", "getsuyobi"] },
  { id: "dow_2", topic: "Calendar", en: ["Tuesday"], kana: "かようび", jp: "火曜日", romaji: ["kayoubi", "kayobi"] },
  { id: "dow_3", topic: "Calendar", en: ["Wednesday"], kana: "すいようび", jp: "水曜日", romaji: ["suiyoubi", "suiyobi"] },
  { id: "dow_4", topic: "Calendar", en: ["Thursday"], kana: "もくようび", jp: "木曜日", romaji: ["mokuyoubi", "mokuyobi"] },
  { id: "dow_5", topic: "Calendar", en: ["Friday"], kana: "きんようび", jp: "金曜日", romaji: ["kinyoubi", "kinyobi"] },
  { id: "dow_6", topic: "Calendar", en: ["Saturday"], kana: "どようび", jp: "土曜日", romaji: ["doyoubi", "doyobi"] },
  { id: "dow_7", topic: "Calendar", en: ["Sunday"], kana: "にちようび", jp: "日曜日", romaji: ["nichiyoubi", "nichiyobi"] },

  // Calendar: days of month
  { id: "dom_1", topic: "Calendar", en: ["1st", "first day"], kana: "ついたち", jp: "1日", romaji: ["tsuitachi"] },
  { id: "dom_2", topic: "Calendar", en: ["2nd", "second day"], kana: "ふつか", jp: "2日", romaji: ["futsuka"] },
  { id: "dom_3", topic: "Calendar", en: ["3rd", "third day"], kana: "みっか", jp: "3日", romaji: ["mikka"] },
  { id: "dom_4", topic: "Calendar", en: ["4th", "fourth day"], kana: "よっか", jp: "4日", romaji: ["yokka"] },
  { id: "dom_5", topic: "Calendar", en: ["5th", "fifth day"], kana: "いつか", jp: "5日", romaji: ["itsuka"] },
  { id: "dom_6", topic: "Calendar", en: ["6th", "sixth day"], kana: "むいか", jp: "6日", romaji: ["muika"] },
  { id: "dom_7", topic: "Calendar", en: ["7th", "seventh day"], kana: "なのか", jp: "7日", romaji: ["nanoka"] },
  { id: "dom_8", topic: "Calendar", en: ["8th", "eighth day"], kana: "ようか", jp: "8日", romaji: ["youka", "yooka"] },
  { id: "dom_9", topic: "Calendar", en: ["9th", "ninth day"], kana: "ここのか", jp: "9日", romaji: ["kokonoka"] },
  { id: "dom_10", topic: "Calendar", en: ["10th", "tenth day"], kana: "とおか", jp: "10日", romaji: ["tooka", "touka"] },
  { id: "dom_11", topic: "Calendar", en: ["11th"], kana: "じゅういちにち", jp: "11日", romaji: ["juuichi-nichi", "juuichinichi", "juichinichi"] },
  { id: "dom_12", topic: "Calendar", en: ["12th"], kana: "じゅうににち", jp: "12日", romaji: ["juuni-nichi", "juuninichi", "juninichi"] },
  { id: "dom_13", topic: "Calendar", en: ["13th"], kana: "じゅうさんにち", jp: "13日", romaji: ["juusan-nichi", "juusannichi", "jusannichi"] },
  { id: "dom_14", topic: "Calendar", en: ["14th"], kana: "じゅうよっか", jp: "14日", romaji: ["juu-yokka", "juuyokka", "juyokka"] },
  { id: "dom_15", topic: "Calendar", en: ["15th"], kana: "じゅうごにち", jp: "15日", romaji: ["juugo-nichi", "juugonichi", "jugonichi"] },
  { id: "dom_16", topic: "Calendar", en: ["16th"], kana: "じゅうろくにち", jp: "16日", romaji: ["juuroku-nichi", "juurokunichi", "jurokunichi"] },
  { id: "dom_17", topic: "Calendar", en: ["17th"], kana: "じゅうしちにち", jp: "17日", romaji: ["juushichi-nichi", "juushichinichi", "jushichinichi"] },
  { id: "dom_18", topic: "Calendar", en: ["18th"], kana: "じゅうはちにち", jp: "18日", romaji: ["juuhachi-nichi", "juuhachinichi", "juhachinichi"] },
  { id: "dom_19", topic: "Calendar", en: ["19th"], kana: "じゅうくにち", jp: "19日", romaji: ["juuku-nichi", "juukunichi", "jukunichi"] },
  { id: "dom_20", topic: "Calendar", en: ["20th"], kana: "はつか", jp: "20日", romaji: ["hatsuka"] },
  { id: "dom_21", topic: "Calendar", en: ["21st"], kana: "にじゅういちにち", jp: "21日", romaji: ["nijuuichi-nichi", "nijuuichinichi", "nijuichinichi"] },
  { id: "dom_22", topic: "Calendar", en: ["22nd"], kana: "にじゅうににち", jp: "22日", romaji: ["nijuuni-nichi", "nijuuninichi", "nijuninichi"] },
  { id: "dom_23", topic: "Calendar", en: ["23rd"], kana: "にじゅうさんにち", jp: "23日", romaji: ["nijuusan-nichi", "nijuusannichi", "nijusannichi"] },
  { id: "dom_24", topic: "Calendar", en: ["24th"], kana: "にじゅうよっか", jp: "24日", romaji: ["nijuu-yokka", "nijuuyokka", "nijuyokka"] },
  { id: "dom_25", topic: "Calendar", en: ["25th"], kana: "にじゅうごにち", jp: "25日", romaji: ["nijuugo-nichi", "nijuugonichi", "nijugonichi"] },
  { id: "dom_26", topic: "Calendar", en: ["26th"], kana: "にじゅうろくにち", jp: "26日", romaji: ["nijuuroku-nichi", "nijuurokunichi", "nijurokunichi"] },
  { id: "dom_27", topic: "Calendar", en: ["27th"], kana: "にじゅうしちにち", jp: "27日", romaji: ["nijuushichi-nichi", "nijuushichinichi", "nijushichinichi"] },
  { id: "dom_28", topic: "Calendar", en: ["28th"], kana: "にじゅうはちにち", jp: "28日", romaji: ["nijuuhachi-nichi", "nijuuhachinichi", "nijuhachinichi"] },
  { id: "dom_29", topic: "Calendar", en: ["29th"], kana: "にじゅうくにち", jp: "29日", romaji: ["nijuuku-nichi", "nijuukunichi", "nijukunichi"] },
  { id: "dom_30", topic: "Calendar", en: ["30th"], kana: "さんじゅうにち", jp: "30日", romaji: ["sanjuu-nichi", "sanjuunichi", "sanjunichi"] },
  { id: "dom_31", topic: "Calendar", en: ["31st"], kana: "さんじゅういちにち", jp: "31日", romaji: ["sanjuuichi-nichi", "sanjuuichinichi", "sanjuichinichi"] },

  // Time
  { id: "time_now", topic: "Time", en: ["now"], kana: "いま", jp: "今", romaji: ["ima"] },
  { id: "time_am", topic: "Time", en: ["a.m.", "AM"], kana: "ごぜん", jp: "午前", romaji: ["gozen"] },
  { id: "time_pm", topic: "Time", en: ["p.m.", "PM"], kana: "ごご", jp: "午後", romaji: ["gogo"] },
  { id: "time_hour", topic: "Time", en: ["hour", "o'clock"], kana: "じ", jp: "時", romaji: ["ji"] },
  { id: "time_min", topic: "Time", en: ["minute"], kana: "ふん", jp: "分", romaji: ["fun", "pun"] },
  { id: "time_half", topic: "Time", en: ["half"], kana: "はん", jp: "半", romaji: ["han"] },
  { id: "time_today", topic: "Time", en: ["today"], kana: "きょう", jp: "今日", romaji: ["kyou", "kyo"] },
  { id: "time_tomorrow", topic: "Time", en: ["tomorrow"], kana: "あした", jp: "明日", romaji: ["ashita"] },
  { id: "time_day_after_tomorrow", topic: "Time", en: ["day after tomorrow"], kana: "あさって", jp: "明後日", romaji: ["asatte"] },
  { id: "time_yesterday", topic: "Time", en: ["yesterday"], kana: "きのう", jp: "昨日", romaji: ["kinou", "kino"] },
  { id: "time_day_before_yesterday", topic: "Time", en: ["day before yesterday"], kana: "おととい", jp: "一昨日", romaji: ["ototoi"] },
  { id: "time_last_year", topic: "Time", en: ["last year", "previous year"], kana: "きょねん", jp: "去年", romaji: ["kyonen"] },
  { id: "time_this_year", topic: "Time", en: ["this year"], kana: "ことし", jp: "今年", romaji: ["kotoshi"] },
  { id: "time_next_year", topic: "Time", en: ["next year"], kana: "らいねん", jp: "来年", romaji: ["rainen"] },
  { id: "time_last_month", topic: "Time", en: ["last month", "previous month"], kana: "せんげつ", jp: "先月", romaji: ["sengetsu"] },
  { id: "time_this_month", topic: "Time", en: ["this month"], kana: "こんげつ", jp: "今月", romaji: ["kongetsu"] },
  { id: "time_next_month", topic: "Time", en: ["next month"], kana: "らいげつ", jp: "来月", romaji: ["raigetsu"] },
  { id: "time_last_week", topic: "Time", en: ["last week", "previous week"], kana: "せんしゅう", jp: "先週", romaji: ["senshuu", "senshu"] },
  { id: "time_this_week", topic: "Time", en: ["this week"], kana: "こんしゅう", jp: "今週", romaji: ["konshuu", "konshu"] },
  { id: "time_next_week", topic: "Time", en: ["next week"], kana: "らいしゅう", jp: "来週", romaji: ["raishuu", "raishu"] },
  { id: "time_every_year", topic: "Time", en: ["every year"], kana: "まいとし", jp: "毎年", romaji: ["maitoshi"] },
  { id: "time_every_month", topic: "Time", en: ["every month"], kana: "まいつき", jp: "毎月", romaji: ["maitsuki"] },
  { id: "time_every_week", topic: "Time", en: ["every week"], kana: "まいしゅう", jp: "毎週", romaji: ["maishuu", "maishu"] },
  { id: "time_every_day", topic: "Time", en: ["every day"], kana: "まいにち", jp: "毎日", romaji: ["mainichi"] },
  { id: "time_year", topic: "Time", en: ["year"], kana: "とし", jp: "年", romaji: ["toshi"] },
  { id: "time_day", topic: "Time", en: ["day"], kana: "ひ", jp: "日", romaji: ["hi"] },
  { id: "time_month", topic: "Time", en: ["month"], kana: "つき", jp: "月", romaji: ["tsuki"] },
  { id: "time_week", topic: "Time", en: ["week"], kana: "しゅう", jp: "週", romaji: ["shuu", "shu"] },

  // Position / Location
  { id: "pos_up", topic: "Position / Location", en: ["up", "above"], kana: "うえ", jp: "上", romaji: ["ue"] },
  { id: "pos_down", topic: "Position / Location", en: ["down", "below"], kana: "した", jp: "下", romaji: ["shita"] },
  { id: "pos_left", topic: "Position / Location", en: ["left"], kana: "ひだり", jp: "左", romaji: ["hidari"] },
  { id: "pos_right", topic: "Position / Location", en: ["right"], kana: "みぎ", jp: "右", romaji: ["migi"] },
  { id: "pos_front", topic: "Position / Location", en: ["front"], kana: "まえ", jp: "前", romaji: ["mae"] },
  { id: "pos_back", topic: "Position / Location", en: ["back", "behind"], kana: "うしろ", jp: "後ろ", romaji: ["ushiro"] },
  { id: "pos_inside", topic: "Position / Location", en: ["inside"], kana: "なか", jp: "中", romaji: ["naka"] },
  { id: "pos_outside", topic: "Position / Location", en: ["outside"], kana: "そと", jp: "外", romaji: ["soto"] },
  { id: "pos_near", topic: "Position / Location", en: ["near"], kana: "ちかく", jp: "近く", romaji: ["chikaku"] },
  { id: "pos_far", topic: "Position / Location", en: ["far"], kana: "とおい", jp: "遠い", romaji: ["tooi"] },

  // Number
  { id: "num_1", topic: "Number", en: ["one", "1"], kana: "いち", jp: "一", romaji: ["ichi"] },
  { id: "num_2", topic: "Number", en: ["two", "2"], kana: "に", jp: "二", romaji: ["ni"] },
  { id: "num_3", topic: "Number", en: ["three", "3"], kana: "さん", jp: "三", romaji: ["san"] },
  { id: "num_4", topic: "Number", en: ["four", "4"], kana: "よん", jp: "四", romaji: ["yon", "shi"] },
  { id: "num_5", topic: "Number", en: ["five", "5"], kana: "ご", jp: "五", romaji: ["go"] },
  { id: "num_6", topic: "Number", en: ["six", "6"], kana: "ろく", jp: "六", romaji: ["roku"] },
  { id: "num_7", topic: "Number", en: ["seven", "7"], kana: "なな", jp: "七", romaji: ["nana", "shichi"] },
  { id: "num_8", topic: "Number", en: ["eight", "8"], kana: "はち", jp: "八", romaji: ["hachi"] },
  { id: "num_9", topic: "Number", en: ["nine", "9"], kana: "きゅう", jp: "九", romaji: ["kyuu", "kyu"] },
  { id: "num_10", topic: "Number", en: ["ten", "10"], kana: "じゅう", jp: "十", romaji: ["juu", "ju"] },

  // Colour
  { id: "col_red", topic: "Colour", en: ["red"], kana: "あか", jp: "赤", romaji: ["aka"] },
  { id: "col_blue", topic: "Colour", en: ["blue"], kana: "あお", jp: "青", romaji: ["ao"] },
  { id: "col_yellow", topic: "Colour", en: ["yellow"], kana: "きいろ", jp: "黄色", romaji: ["kiiro"] },
  { id: "col_green", topic: "Colour", en: ["green"], kana: "みどり", jp: "緑", romaji: ["midori"] },
  { id: "col_white", topic: "Colour", en: ["white"], kana: "しろ", jp: "白", romaji: ["shiro"] },
  { id: "col_black", topic: "Colour", en: ["black"], kana: "くろ", jp: "黒", romaji: ["kuro"] },
  { id: "col_brown", topic: "Colour", en: ["brown"], kana: "ちゃいろ", jp: "茶色", romaji: ["chairo"] },
  { id: "col_pink", topic: "Colour", en: ["pink"], kana: "ぴんく", jp: "ピンク", romaji: ["pinku"] },
  { id: "col_orange", topic: "Colour", en: ["orange"], kana: "おれんじ", jp: "オレンジ", romaji: ["orenji"] }
];

const DECKS = [
  {
    id: "calendar_time",
    title: "Calendar + Time",
    titleEs: "Calendario + Tiempo",
    description: "Months, weekdays, dates, and the time words you actually need in conversation.",
    descriptionEs: "Meses, días de la semana, fechas y palabras de tiempo que realmente necesitas en conversacion.",
    topics: ["Calendar", "Time"],
    icon: "calendar-days",
  },
  {
    id: "colour",
    title: "Colour",
    titleEs: "Colores",
    description: "A compact deck for the core color words used in everyday descriptions.",
    descriptionEs: "Un deck compacto con palabras clave de color para descripciones del día a día.",
    topics: ["Colour"],
    icon: "palette",
  },
];

const I18N = {
  en: {
    documentTitle: "Japanese Vocabulary Trainer",
    language: "Language",
    heroEyebrow: "Vocabulary Practice",
    heroTitle: "Japanese Vocabulary Trainer",
    heroSubtitle: "Pick a deck, choose a direction, and practice.",
    selectionStep: "Step 1",
    selectionTitle: "Choose What To Practice",
    currentDeck: "Current Deck",
    backToDecks: "Back To Decks",
    refreshDeck: "Refresh Deck",
    modeSwitchAria: "Practice direction",
    modeEnToJp: "English to Japanese",
    modeEsToJp: "Spanish to Japanese",
    modeJpToEn: "Japanese to English",
    modeJpToEs: "Japanese to Spanish",
    statGood: "Good",
    statCompleted: "Completed",
    statWrong: "Wrong",
    completionKicker: "Session Complete",
    practiceDeck: "Practice Deck",
    words: "words",
    start: "Start",
    topicCalendar: "Calendar",
    topicTime: "Time",
    topicColour: "Colour",
    fullDeck: "Full deck",
    wrongWordsReview: "Wrong words review",
    sessionComplete: "Session complete",
    allClear: "All clear.",
    roundFinished: "Round finished.",
    clearedWithoutMisses: "You cleared the whole deck without any misses.",
    reviewMissesHint: "Review your misses or restart the deck for another pass.",
    next: "Next",
    check: "Check",
    englishPrompt: "English prompt",
    spanishPrompt: "Spanish prompt",
    japanesePrompt: "Japanese prompt",
    typeRomaji: "Type romaji",
    typeEnglish: "Type English",
    typeSpanish: "Type Spanish",
    exampleRomaji: "e.g. getsuyoubi",
    exampleEnglish: "e.g. Monday",
    exampleSpanish: "e.g. lunes",
    cardProgress: "Card {current} of {total}",
    cardChecked: "Card {current} of {total} · Checked. Press Enter or Next.",
    perfectRound: "Perfect round.",
    perfectRoundText: "You got all {total} words right. Restart the deck or pick another one.",
    goodRun: "Good run.",
    goodRunText: "You finished {total} words with {wrong} miss{suffix}. Review only those wrong words or restart the whole deck.",
    practiceWrongOnly: "Practice Wrong Words Only",
    restartDeck: "Restart This Deck",
    chooseAnotherDeck: "Choose Another Deck",
    correctFeedback: "Correct. {jp} ({kana}) = {meaning}",
    incorrectFeedback: "Not quite. Answer: {jp} ({kana}) = {meaning}. Romaji: {romaji}",
    kanaPreview: "Kana: {kana}{tail}",
  },
  es: {
    documentTitle: "Práctica de Vocabulario Japonés",
    language: "Idioma",
    heroEyebrow: "Practica de vocabulario",
    heroTitle: "Práctica de Vocabulario Japonés",
    heroSubtitle: "Elige un deck, cambia la direccion y practica.",
    selectionStep: "Paso 1",
    selectionTitle: "Elige Que Practicar",
    currentDeck: "Deck actual",
    backToDecks: "Volver a decks",
    refreshDeck: "Reiniciar deck",
    modeSwitchAria: "Direccion de practica",
    modeEnToJp: "Ingles a Japonés",
    modeEsToJp: "Español a Japonés",
    modeJpToEn: "Japonés a ingles",
    modeJpToEs: "Japonés a español",
    statGood: "Correctas",
    statCompleted: "Completadas",
    statWrong: "Errores",
    completionKicker: "Sesion completa",
    practiceDeck: "Deck de practica",
    words: "palabras",
    start: "Empezar",
    topicCalendar: "Calendario",
    topicTime: "Tiempo",
    topicColour: "Colores",
    fullDeck: "Deck completo",
    wrongWordsReview: "Repaso de errores",
    sessionComplete: "Sesion completa",
    allClear: "Sin errores.",
    roundFinished: "Ronda terminada.",
    clearedWithoutMisses: "Completaste todo el deck sin errores.",
    reviewMissesHint: "Repasa tus errores o reinicia el deck para empezar de nuevo.",
    next: "Siguiente",
    check: "Comprobar",
    englishPrompt: "Tarjeta en ingles",
    spanishPrompt: "Tarjeta en español",
    japanesePrompt: "Tarjeta en Japonés",
    typeRomaji: "Escribe romaji",
    typeEnglish: "Escribe en ingles",
    typeSpanish: "Escribe en español",
    exampleRomaji: "ej. getsuyoubi",
    exampleEnglish: "ej. Monday",
    exampleSpanish: "ej. lunes",
    cardProgress: "Tarjeta {current} de {total}",
    cardChecked: "Tarjeta {current} de {total} · Pulsa Enter o Siguiente.",
    perfectRound: "Ronda perfecta.",
    perfectRoundText: "Acertaste las {total} palabras. Reinicia el deck o elige otro.",
    goodRun: "Buen intento.",
    goodRunText: "Terminaste {total} palabras con {wrong} error{suffix}. Repasa solo esas o reinicia todo el deck.",
    practiceWrongOnly: "Practicar solo errores",
    restartDeck: "Reiniciar este deck",
    chooseAnotherDeck: "Elegir otro deck",
    correctFeedback: "Correcto. {jp} ({kana}) = {meaning}",
    incorrectFeedback: "Casi. Respuesta: {jp} ({kana}) = {meaning}. Romaji: {romaji}",
    kanaPreview: "Kana: {kana}{tail}",
  },
};

function t(key, vars = {}) {
  const locale = I18N[state.lang] || I18N.en;
  const template = locale[key] || I18N.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, token) => String(vars[token] ?? `{${token}}`));
}

const SESSION_STORAGE_KEY = "flashcards_session_v2";
const VOCAB_BY_ID = new Map(VOCAB.map((card) => [card.id, card]));
const ADVANCE_GUARD_MS = 220;

const state = loadSession();

const ui = {
  langPickerLabel: document.getElementById("langPickerLabel"),
  langPicker: document.getElementById("langPicker"),
  hero: document.getElementById("hero"),
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroTitle: document.getElementById("heroTitle"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  selectionView: document.getElementById("selectionView"),
  selectionStep: document.getElementById("selectionStep"),
  selectionTitle: document.getElementById("selectionTitle"),
  practiceView: document.getElementById("practiceView"),
  deckGrid: document.getElementById("deckGrid"),
  backBtn: document.getElementById("backBtn"),
  refreshBtn: document.getElementById("refreshBtn"),
  modeSwitch: document.getElementById("modeSwitch"),
  currentDeckKicker: document.getElementById("currentDeckKicker"),
  deckTitle: document.getElementById("deckTitle"),
  deckIconWrap: document.querySelector(".deck-main-icon-wrap"),
  deckSubtitle: document.getElementById("deckSubtitle"),
  statGoodLabel: document.getElementById("statGoodLabel"),
  statCompletedLabel: document.getElementById("statCompletedLabel"),
  statWrongLabel: document.getElementById("statWrongLabel"),
  statGood: document.getElementById("statGood"),
  statCompleted: document.getElementById("statCompleted"),
  statWrong: document.getElementById("statWrong"),
  trainer: document.getElementById("trainerCard"),
  promptLabel: document.getElementById("promptLabel"),
  promptText: document.getElementById("promptText"),
  promptJapanese: document.getElementById("promptJapanese"),
  promptSub: document.getElementById("promptSub"),
  answerForm: document.getElementById("answerForm"),
  answerLabel: document.getElementById("answerLabel"),
  answerInput: document.getElementById("answerInput"),
  romajiPreview: document.getElementById("romajiPreview"),
  submitBtn: document.getElementById("submitBtn"),
  feedback: document.getElementById("feedback"),
  completionPanel: document.getElementById("completionPanel"),
  completionKicker: document.getElementById("completionKicker"),
  completionTitle: document.getElementById("completionTitle"),
  completionText: document.getElementById("completionText"),
  retryWrongBtn: document.getElementById("retryWrongBtn"),
  restartBtn: document.getElementById("restartBtn"),
  changeDeckBtn: document.getElementById("changeDeckBtn"),
};

init();

function init() {
  renderDeckCards();
  bindEvents();
  renderApp();
  renderIcons();
}

function bindEvents() {
  ui.langPicker.addEventListener("change", () => {
    state.lang = ui.langPicker.value === "es" ? "es" : "en";
    saveSession();
    renderDeckCards();
    renderApp();
  });

  ui.deckGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-deck-id]");
    if (!button) {
      return;
    }

    startSession(button.dataset.deckId);
  });

  ui.backBtn.addEventListener("click", resetToSelection);
  ui.changeDeckBtn.addEventListener("click", resetToSelection);
  ui.refreshBtn.addEventListener("click", () => {
    if (!state.deckId) {
      return;
    }
    startSession(state.deckId);
  });

  ui.restartBtn.addEventListener("click", () => {
    if (!state.deckId) {
      return;
    }
    startSession(state.deckId);
  });

  ui.retryWrongBtn.addEventListener("click", () => {
    if (!state.deckId || state.wrongIds.length === 0) {
      return;
    }
    startSession(state.deckId, { cardIds: state.wrongIds, reviewMode: true });
  });

  ui.modeSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button || button.dataset.mode === state.mode) {
      return;
    }

    state.mode = button.dataset.mode;
    ui.answerInput.value = "";
    ui.romajiPreview.textContent = "";
    saveSession();
    renderApp();
    focusAnswerInput();
  });

  ui.answerInput.addEventListener("input", () => {
    if (state.mode !== "en_to_jp" || state.awaitingNext || state.finished) {
      ui.romajiPreview.textContent = "";
      return;
    }

    const kana = romajiToHiragana(cleanRomaji(ui.answerInput.value));
    if (!kana) {
      ui.romajiPreview.textContent = "";
      return;
    }

    const matching = findKanjiByKana(kana);
    const tail = matching.length > 0 ? ` -> ${matching.join(" / ")}` : "";
    ui.romajiPreview.textContent = t("kanaPreview", { kana, tail });
  });

  ui.answerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (state.awaitingNext) {
      if (!canAdvanceNow()) {
        return;
      }
      return;
    }

    checkAnswer();
  });

  ui.submitBtn.addEventListener("click", (event) => {
    if (!state.awaitingNext) {
      return;
    }

    if (!canAdvanceNow()) {
      return;
    }

    event.preventDefault();
    advanceCard();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || !state.awaitingNext || state.finished || !state.deckId) {
      return;
    }

    if (!canAdvanceNow()) {
      return;
    }

    event.preventDefault();
    advanceCard();
  });
}

function applyStaticText() {
  document.documentElement.lang = state.lang;
  document.title = t("documentTitle");
  ui.langPickerLabel.textContent = t("language");
  ui.langPicker.value = state.lang;
  ui.heroEyebrow.textContent = t("heroEyebrow");
  ui.heroTitle.textContent = t("heroTitle");
  ui.heroSubtitle.textContent = t("heroSubtitle");
  ui.selectionStep.textContent = t("selectionStep");
  ui.selectionTitle.textContent = t("selectionTitle");
  ui.backBtn.textContent = t("backToDecks");
  ui.refreshBtn.textContent = t("refreshDeck");
  ui.currentDeckKicker.textContent = t("currentDeck");
  ui.statGoodLabel.textContent = t("statGood");
  ui.statCompletedLabel.textContent = t("statCompleted");
  ui.statWrongLabel.textContent = t("statWrong");
  ui.completionKicker.textContent = t("completionKicker");
  ui.retryWrongBtn.textContent = t("practiceWrongOnly");
  ui.restartBtn.textContent = t("restartDeck");
  ui.changeDeckBtn.textContent = t("chooseAnotherDeck");
  ui.modeSwitch.setAttribute("aria-label", t("modeSwitchAria"));
}

function localizeTopic(topic) {
  if (topic === "Calendar") {
    return t("topicCalendar");
  }
  if (topic === "Time") {
    return t("topicTime");
  }
  if (topic === "Colour") {
    return t("topicColour");
  }
  return topic;
}

function getSpanishAnswers(card) {
  if (card.id.startsWith("month_")) {
    const monthNames = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
    ];
    const index = Number(card.id.split("_")[1]) - 1;
    return monthNames[index] ? [monthNames[index]] : [];
  }

  if (card.id.startsWith("dow_")) {
    const dayNames = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const index = Number(card.id.split("_")[1]) - 1;
    return dayNames[index] ? [dayNames[index]] : [];
  }

  if (card.id.startsWith("dom_")) {
    const day = Number(card.id.split("_")[1]);
    if (!Number.isFinite(day) || day < 1 || day > 31) {
      return [];
    }

    if (day === 1) {
      return ["primero", "día 1", "día primero"];
    }

    return [`día ${day}`];
  }

  const byId = {
    time_now: ["ahora"],
    time_am: ["a. m.", "am", "mañana"],
    time_pm: ["p. m.", "pm", "tarde"],
    time_hour: ["hora", "en punto"],
    time_min: ["minuto"],
    time_half: ["media"],
    time_today: ["hoy"],
    time_tomorrow: ["mañana"],
    time_day_after_tomorrow: ["pasado mañana"],
    time_yesterday: ["ayer"],
    time_day_before_yesterday: ["anteayer"],
    time_last_year: ["año pasado"],
    time_this_year: ["este año"],
    time_next_year: ["próximo año", "año que viene"],
    time_last_month: ["mes pasado"],
    time_this_month: ["este mes"],
    time_next_month: ["próximo mes", "mes que viene"],
    time_last_week: ["semana pasada"],
    time_this_week: ["esta semana"],
    time_next_week: ["próxima semana", "semana que viene"],
    time_every_year: ["cada año"],
    time_every_month: ["cada mes"],
    time_every_week: ["cada semana"],
    time_every_day: ["cada día"],
    time_year: ["año"],
    time_day: ["día"],
    time_month: ["mes"],
    time_week: ["semana"],
    col_red: ["rojo"],
    col_blue: ["azul"],
    col_yellow: ["amarillo"],
    col_green: ["verde"],
    col_white: ["blanco"],
    col_black: ["negro"],
    col_brown: ["marrón", "cafe"],
    col_pink: ["rosa"],
    col_orange: ["naranja"],
  };

  return byId[card.id] || [];
}

function getPromptMeaning(card) {
  return getMeaningAnswers(card)[0] || card.en[0];
}

function getMeaningAnswers(card) {
  if (state.lang === "es") {
    const spanish = getSpanishAnswers(card);
    if (spanish.length > 0) {
      return spanish;
    }
  }

  return card.en;
}

function getModeLabel(mode) {
  if (mode === "en_to_jp") {
    return state.lang === "es" ? t("modeEsToJp") : t("modeEnToJp");
  }

  return state.lang === "es" ? t("modeJpToEs") : t("modeJpToEn");
}

function getDeckTitle(deck) {
  return state.lang === "es" ? (deck.titleEs || deck.title) : deck.title;
}

function getDeckDescription(deck) {
  return state.lang === "es" ? (deck.descriptionEs || deck.description) : deck.description;
}

function renderDeckCards() {
  ui.deckGrid.innerHTML = DECKS.map((deck) => {
    const count = getDeckCards(deck.id).length;
    return `
      <button type="button" class="deck-card" data-deck-id="${deck.id}">
        <div class="deck-title-row">
          <div>
            <p class="section-kicker">${t("practiceDeck")}</p>
            <div class="deck-inline-heading">
              <i class="deck-icon" data-lucide="${deck.icon}" aria-hidden="true"></i>
              <h3>${getDeckTitle(deck)}</h3>
            </div>
          </div>
          <span class="deck-badge">${count} ${t("words")}</span>
        </div>
        <p class="deck-description">${getDeckDescription(deck)}</p>
        <div class="deck-footer">
          <span>${deck.topics.map(localizeTopic).join(" + ")}</span>
          <span class="deck-action">${t("start")}</span>
        </div>
      </button>
    `;
  }).join("");

  renderIcons();
}

function renderApp() {
  applyStaticText();

  const inPractice = Boolean(state.deckId);
  ui.hero.hidden = inPractice;
  ui.selectionView.hidden = inPractice;
  ui.practiceView.hidden = !inPractice;

  if (!inPractice) {
    return;
  }

  renderModeButtons();
  renderHeader();
  renderTrainer();
  renderFeedback();
  renderCompletion();
  renderIcons();
}

function renderModeButtons() {
  ui.modeSwitch.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
    button.textContent = getModeLabel(button.dataset.mode);
  });
}

function renderHeader() {
  const deck = getDeck(state.deckId);
  if (!deck) {
    return;
  }

  ui.deckTitle.textContent = getDeckTitle(deck);
  ui.deckIconWrap.innerHTML = `<i id="deckIcon" class="deck-main-icon" data-lucide="${deck.icon || "book-open"}"></i>`;

  const modeText = getModeLabel(state.mode);
  const reviewText = state.reviewMode ? t("wrongWordsReview") : t("fullDeck");
  ui.deckSubtitle.textContent = `${reviewText} · ${modeText}`;

  ui.statGood.textContent = String(state.correct);
  ui.statCompleted.textContent = `${state.completed} / ${state.sessionSize}`;
  ui.statWrong.textContent = String(state.wrong);
}

function renderTrainer() {
  const card = getCurrentCard();
  ui.trainer.classList.toggle("jp-focus", state.mode === "jp_to_en");

  if (state.finished || !card) {
    ui.promptLabel.textContent = t("sessionComplete");
    ui.promptText.textContent = state.wrong === 0 ? t("allClear") : t("roundFinished");
    ui.promptJapanese.textContent = "";
    ui.promptSub.textContent = state.wrong === 0
      ? t("clearedWithoutMisses")
      : t("reviewMissesHint");
    ui.answerForm.hidden = true;
    return;
  }

  ui.answerForm.hidden = false;
  ui.answerInput.disabled = state.awaitingNext;
  ui.submitBtn.textContent = state.awaitingNext ? t("next") : t("check");
  ui.submitBtn.type = state.awaitingNext ? "button" : "submit";

  if (state.mode === "en_to_jp") {
    ui.promptLabel.textContent = state.lang === "es" ? t("spanishPrompt") : t("englishPrompt");
    ui.promptText.textContent = getPromptMeaning(card);
    ui.promptJapanese.textContent = "";
    ui.answerLabel.textContent = t("typeRomaji");
    ui.answerInput.placeholder = t("exampleRomaji");
  } else {
    ui.promptLabel.textContent = t("japanesePrompt");
    ui.promptText.textContent = "";
    ui.promptJapanese.textContent = `${card.jp} (${card.kana})`;
    ui.answerLabel.textContent = state.lang === "es" ? t("typeSpanish") : t("typeEnglish");
    ui.answerInput.placeholder = state.lang === "es" ? t("exampleSpanish") : t("exampleEnglish");
  }

  const currentCardNumber = Math.min(
    state.completed + (state.awaitingNext ? 0 : 1),
    state.sessionSize
  );
  if (state.awaitingNext) {
    ui.promptSub.textContent = t("cardChecked", { current: currentCardNumber, total: state.sessionSize });
  } else {
    ui.promptSub.textContent = t("cardProgress", { current: currentCardNumber, total: state.sessionSize });
  }
}

function renderFeedback() {
  ui.feedback.className = "feedback";
  if (!state.feedbackText) {
    ui.feedback.textContent = "";
    return;
  }

  ui.feedback.classList.add(state.feedbackKind);
  ui.feedback.textContent = state.feedbackText;
}

function renderCompletion() {
  ui.completionPanel.hidden = !state.finished;
  if (!state.finished) {
    return;
  }

  if (state.wrong === 0) {
    ui.completionTitle.textContent = t("perfectRound");
    ui.completionText.textContent = t("perfectRoundText", { total: state.sessionSize });
  } else {
    ui.completionTitle.textContent = t("goodRun");
    ui.completionText.textContent = t("goodRunText", {
      total: state.sessionSize,
      wrong: state.wrong,
      suffix: state.wrong === 1 ? "" : "es",
    });
  }

  ui.retryWrongBtn.hidden = state.wrongIds.length === 0;
}

function startSession(deckId, options = {}) {
  const cardIds = options.cardIds ? [...options.cardIds] : getDeckCards(deckId).map((card) => card.id);
  const shuffled = shuffle(cardIds);
  const currentCardId = shuffled.shift() || "";

  state.deckId = deckId;
  state.sessionSize = cardIds.length;
  state.remainingIds = shuffled;
  state.currentCardId = currentCardId;
  state.completed = 0;
  state.correct = 0;
  state.wrong = 0;
  state.wrongIds = [];
  state.awaitingNext = false;
  state.finished = !currentCardId;
  state.reviewMode = Boolean(options.reviewMode);
  state.feedbackKind = "";
  state.feedbackText = "";
  state.advanceReadyAt = 0;

  ui.answerInput.value = "";
  ui.romajiPreview.textContent = "";
  saveSession();
  renderApp();
  focusAnswerInput();
}

function resetToSelection() {
  const mode = state.mode;
  const lang = state.lang;
  Object.assign(state, createDefaultState(), { mode, lang });
  saveSession();
  renderApp();
}

function advanceCard() {
  if (state.finished) {
    return;
  }

  const nextId = state.remainingIds.shift() || "";
  state.currentCardId = nextId;
  state.awaitingNext = false;
  state.feedbackKind = "";
  state.feedbackText = "";
  state.advanceReadyAt = 0;
  ui.answerInput.value = "";
  ui.romajiPreview.textContent = "";

  if (!nextId) {
    state.finished = true;
  }

  saveSession();
  renderApp();
  focusAnswerInput();
}

function checkAnswer() {
  const card = getCurrentCard();
  if (!card || state.awaitingNext || state.finished) {
    return;
  }

  const answer = ui.answerInput.value.trim();
  if (!answer) {
    return;
  }

  const ok = state.mode === "en_to_jp"
    ? isCorrectJapaneseAnswer(answer, card)
    : isCorrectMeaningAnswer(answer, card);

  state.completed += 1;

  if (ok) {
    state.correct += 1;
    state.feedbackKind = "ok";
    state.feedbackText = t("correctFeedback", {
      jp: card.jp,
      kana: card.kana,
      meaning: getMeaningAnswers(card).join(" / "),
    });
  } else {
    state.wrong += 1;
    if (!state.wrongIds.includes(card.id)) {
      state.wrongIds.push(card.id);
    }
    state.feedbackKind = "bad";
    state.feedbackText = t("incorrectFeedback", {
      jp: card.jp,
      kana: card.kana,
      meaning: getMeaningAnswers(card).join(" / "),
      romaji: card.romaji.join(" / "),
    });
  }

  if (state.completed >= state.sessionSize) {
    state.finished = true;
    state.awaitingNext = false;
    state.advanceReadyAt = 0;
  } else {
    state.awaitingNext = true;
    state.advanceReadyAt = Date.now() + ADVANCE_GUARD_MS;
  }

  saveSession();
  renderApp();
}

function getDeck(deckId) {
  return DECKS.find((deck) => deck.id === deckId) || null;
}

function getDeckCards(deckId) {
  const deck = getDeck(deckId);
  if (!deck) {
    return [];
  }

  return VOCAB.filter((card) => deck.topics.includes(card.topic));
}

function getCurrentCard() {
  return VOCAB_BY_ID.get(state.currentCardId) || null;
}

function canAdvanceNow() {
  return Date.now() >= state.advanceReadyAt;
}

function createDefaultState() {
  return {
    deckId: "",
    lang: "es",
    mode: "en_to_jp",
    currentCardId: "",
    remainingIds: [],
    sessionSize: 0,
    completed: 0,
    correct: 0,
    wrong: 0,
    wrongIds: [],
    awaitingNext: false,
    finished: false,
    reviewMode: false,
    feedbackKind: "",
    feedbackText: "",
    advanceReadyAt: 0,
  };
}

function loadSession() {
  const fallback = createDefaultState();

  try {
    const raw = JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY) || "null");
    if (!raw || typeof raw !== "object") {
      return fallback;
    }

    if (raw.deckId && !getDeck(raw.deckId)) {
      return fallback;
    }

    return {
      ...fallback,
      deckId: typeof raw.deckId === "string" ? raw.deckId : "",
      lang: raw.lang === "en" ? "en" : "es",
      mode: raw.mode === "jp_to_en" ? "jp_to_en" : "en_to_jp",
      currentCardId: typeof raw.currentCardId === "string" ? raw.currentCardId : "",
      remainingIds: Array.isArray(raw.remainingIds) ? raw.remainingIds.filter((id) => typeof id === "string") : [],
      sessionSize: Number.isFinite(raw.sessionSize) ? Math.max(0, raw.sessionSize) : 0,
      completed: Number.isFinite(raw.completed) ? Math.max(0, raw.completed) : 0,
      correct: Number.isFinite(raw.correct) ? Math.max(0, raw.correct) : 0,
      wrong: Number.isFinite(raw.wrong) ? Math.max(0, raw.wrong) : 0,
      wrongIds: Array.isArray(raw.wrongIds) ? raw.wrongIds.filter((id) => typeof id === "string") : [],
      awaitingNext: Boolean(raw.awaitingNext),
      finished: Boolean(raw.finished),
      reviewMode: Boolean(raw.reviewMode),
      feedbackKind: raw.feedbackKind === "ok" || raw.feedbackKind === "bad" ? raw.feedbackKind : "",
      feedbackText: typeof raw.feedbackText === "string" ? raw.feedbackText : "",
      advanceReadyAt: Number.isFinite(raw.advanceReadyAt) ? Math.max(0, raw.advanceReadyAt) : 0,
    };
  } catch {
    return fallback;
  }
}

function saveSession() {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(state));
}

function focusAnswerInput() {
  if (!state.deckId || state.finished || state.awaitingNext) {
    return;
  }

  ui.answerInput.focus();
}

function renderIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function shuffle(items) {
  const list = [...items];
  for (let index = list.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
  }
  return list;
}

function isCorrectJapaneseAnswer(input, card) {
  const cleanedInput = cleanRomaji(input);
  const kanaInput = romajiToHiragana(cleanedInput);

  const kanaMatch = kanaInput && normalizeKana(kanaInput) === normalizeKana(card.kana);
  const romajiMatch = card.romaji.some((r) => cleanRomaji(r) === cleanedInput);

  return Boolean(kanaMatch || romajiMatch);
}

function isCorrectEnglishAnswer(input, card) {
  const normalized = normalizeEnglish(input);
  return card.en.some((ans) => normalizeEnglish(ans) === normalized);
}

function isCorrectMeaningAnswer(input, card) {
  const normalized = normalizeMeaning(input);
  return getMeaningAnswers(card).some((ans) => normalizeMeaning(ans) === normalized);
}

function findKanjiByKana(kana) {
  return VOCAB.filter((v) => normalizeKana(v.kana) === normalizeKana(kana)).map((v) => v.jp);
}

function normalizeEnglish(value) {
  return value
    .toLowerCase()
    .replace(/[.']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeMeaning(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanRomaji(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z\-\s]/g, "")
    .replace(/\s+/g, "")
    .trim();
}

function normalizeKana(value) {
  return value.replace(/ー/g, "");
}

function romajiToHiragana(input) {
  const table = {
    kya: "きゃ", kyu: "きゅ", kyo: "きょ",
    gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
    sha: "しゃ", shu: "しゅ", sho: "しょ",
    sya: "しゃ", syu: "しゅ", syo: "しょ",
    ja: "じゃ", ju: "じゅ", jo: "じょ",
    jya: "じゃ", jyu: "じゅ", jyo: "じょ",
    cha: "ちゃ", chu: "ちゅ", cho: "ちょ",
    tya: "ちゃ", tyu: "ちゅ", tyo: "ちょ",
    nya: "にゃ", nyu: "にゅ", nyo: "にょ",
    hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
    bya: "びゃ", byu: "びゅ", byo: "びょ",
    pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ",
    mya: "みゃ", myu: "みゅ", myo: "みょ",
    rya: "りゃ", ryu: "りゅ", ryo: "りょ",

    fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ",
    wi: "うぃ", we: "うぇ", wo: "を",

    a: "あ", i: "い", u: "う", e: "え", o: "お",
    ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
    ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
    sa: "さ", shi: "し", su: "す", se: "せ", so: "そ",
    za: "ざ", ji: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
    ta: "た", chi: "ち", tsu: "つ", te: "て", to: "と",
    da: "だ", de: "で", do: "ど",
    na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
    ha: "は", hi: "ひ", fu: "ふ", he: "へ", ho: "ほ",
    ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
    pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
    ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
    ya: "や", yu: "ゆ", yo: "よ",
    ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
    wa: "わ", n: "ん",

    vu: "ゔ"
  };

  let out = "";
  let i = 0;
  const s = input.toLowerCase();

  while (i < s.length) {
    const c = s[i];
    const next = s[i + 1] || "";

    if (c === "-") {
      out += "ー";
      i += 1;
      continue;
    }

    if (
      i + 1 < s.length &&
      c === next &&
      /[bcdfghjklmpqrstvwxyz]/.test(c) &&
      c !== "n"
    ) {
      out += "っ";
      i += 1;
      continue;
    }

    if (c === "n") {
      if (i === s.length - 1) {
        out += "ん";
        i += 1;
        continue;
      }

      const after = s[i + 1];
      if (after === "'" || (after !== "y" && !/[aeiou]/.test(after))) {
        out += "ん";
        i += 1;
        continue;
      }
    }

    const chunk3 = s.slice(i, i + 3);
    const chunk2 = s.slice(i, i + 2);
    const chunk1 = s.slice(i, i + 1);

    if (table[chunk3]) {
      out += table[chunk3];
      i += 3;
      continue;
    }

    if (table[chunk2]) {
      out += table[chunk2];
      i += 2;
      continue;
    }

    if (table[chunk1]) {
      out += table[chunk1];
      i += 1;
      continue;
    }

    i += 1;
  }

  return out;
}
