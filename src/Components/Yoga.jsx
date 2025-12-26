import React from "react";

const yogaList = [
  {
    name: "Tadasana",
    image: "/yoga/Tadasana.png",
    benefit: "Posture improve karta hai aur spine strong banata hai",
    importance: "Ye foundation pose hai jo body alignment sikhata hai",
    how: "Seedha khade ho jao, haath upar stretch karo aur deep breathing ke saath hold karo",
  },
  {
    name: "Vrikshasana",
    image: "/yoga/vrksasana.png",
    benefit: "Balance, focus aur leg strength improve karta hai",
    importance: "Mind–body coordination strong hoti hai",
    how: "Ek pair par khade ho, dusra pair thigh par rakho, haath upar jodo",
  },
  {
    name: "Bhujangasana",
    image: "/yoga/Bhunjangasana.png",
    benefit: "Back pain kam karta hai aur spine flexible banata hai",
    importance: "Long sitting lifestyle ke liye best pose",
    how: "Pet ke bal let jao, haathon se chest upar uthao",
  },
  {
    name: "Adho Mukha Svanasana",
    image: "/yoga/Adho mukha.png",
    benefit: "Full body stretch aur circulation improve karta hai",
    importance: "Energy boost aur stiffness kam karta hai",
    how: "V shape banao, haath aur pair floor par press karo",
  },
  {
    name: "Trikonasana",
    image: "/yoga/trikonasana.png",
    benefit: "Waist stretch aur digestion improve",
    importance: "Side body flexibility ke liye important",
    how: "Pair khol kar ek side jhuk jao, ek haath upar rakho",
  },
  {
    name: "Setu Bandhasana",
    image: "/yoga/setu-bandhasana.png",
    benefit: "Back, hips aur glutes strong karta hai",
    importance: "Lower body activation ke liye best",
    how: "Peeth ke bal let kar hips upar uthao",
  },
  {
    name: "Paschimottanasana",
    image: "/yoga/paschimottanasana.png",
    benefit: "Digestion improve aur stress kam",
    importance: "Belly fat ke liye helpful",
    how: "Baith kar aage jhuk jao aur pair pakdo",
  },
  {
    name: "Dhanurasana",
    image: "/yoga/Dhanusarana.png",
    benefit: "Core aur spine strong banata hai",
    importance: "Abdominal organs stimulate karta hai",
    how: "Pet ke bal let kar pair aur chest upar uthao",
  },
  {
    name: "Utkatasana",
    image: "/yoga/Ukatasana.png",
    benefit: "Thighs aur glutes strong karta hai",
    importance: "High calorie burn pose",
    how: "Kursi jaisi position me baith jao",
  },
  {
    name: "Balasana",
    image: "/yoga/Balasana.png",
    benefit: "Relaxation aur stress relief",
    importance: "Recovery pose",
    how: "Ghuttno par baith kar aage jhuk jao",
  },
  {
    name: "Surya Namaskar",
    image: "/yoga/suraya namskara.png",
    benefit: "Full body workout aur fat burn",
    importance: "Complete yoga routine",
    how: "12 steps ko flow me perform karo",
  },
  {
    name: "Anulom Vilom",
    image: "/yoga/anulom vilom.png",
    benefit: "Stress kam aur lungs strong",
    importance: "Breathing control ke liye best",
    how: "Alternate nostril se saans lo",
  },
];

const Yoga = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-black px-6 py-12 text-white">
      {/* HEADING */}
      <h1 className="text-3xl font-extrabold text-center">
        🧘 Yoga for Healthy & Balanced Life
      </h1>

      {/* GAP 1 */}
      <div className="h-6" />

      {/* PARA */}
      <p className="max-w-3xl mx-auto text-sm text-gray-200 text-center">
        Yoga body, mind aur lifestyle ko balance karta hai — sustainable fat
        loss aur long-term health ke liye ek powerful habit.
      </p>

      {/* GAP 2 — IMPORTANT */}
      <div className="h-12" />

      {/* CARDS */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {yogaList.map((yoga) => (
          <div
            key={yoga.name}
            className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="h-64 bg-black/30">
              <img
                src={yoga.image}
                alt={yoga.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-bold text-emerald-300">
                {yoga.name}
              </h2>
              <p className="text-xs">
                <b>Fayde:</b> {yoga.benefit}
              </p>
              <p className="text-xs">
                <b>Important kyun:</b> {yoga.importance}
              </p>
              <p className="text-xs">
                <b>Kaise kare:</b> {yoga.how}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* GAP 3 — BETWEEN CARDS & SUMMARY */}
      <div className="h-20" />

      {/* SUMMARY */}
      <div className="max-w-4xl mx-auto bg-white/10 p-6 rounded-2xl border border-emerald-400/30">
        <h3 className="text-lg font-semibold text-emerald-300 mb-3">
          🌿 Final Summary
        </h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          Yoga ek slow process hai, lekin iska impact permanent hota hai. Ye
          body ko sirf fit nahi banata, balki injury-free, mentally calm aur
          internally strong bhi karta hai. Agar aap sustainable fat loss,
          stress-free mind aur long-term healthy lifestyle chahte ho, to yoga ko
          daily routine ka hissa banana ek smart aur powerful decision hai.
        </p>
      </div>
    </div>
  );
};

export default Yoga;
