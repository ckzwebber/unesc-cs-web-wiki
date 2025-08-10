const teams = [
  {
    name: "1. Vitality",
    description: "Organização francesa dominante com excelente performance recente.",
    image: "https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=100&s=a0731380d1075205aadb30905a49da55",
    link: "https://www.hltv.org/team/9565/vitality",
  },
  {
    name: "2. MOUZ",
    description: "Tradicional organização alemã, consistente e com bom desempenho.",
    image: "https://img-cdn.hltv.org/teamlogo/IejtXpquZnE8KqYPB1LNKw.svg?ixlib=java-2.1.0&s=7fd33b8def053fbfd8fdbb58e3bdcd3c",
    link: "https://www.hltv.org/team/4494/mouz",
  },
  {
    name: "3. Spirit",
    description: "Time russo de ascensão rápida, jovens talentos em destaque.",
    image: "https://img-cdn.hltv.org/teamlogo/ywdn4tmAvXfllLeV2SkkvF.png?ixlib=java-2.1.0&w=100&s=e441b77b1cafbca20ba9f667caca56f4",
    link: "https://www.hltv.org/team/7020/spirit",
  },
  {
    name: "4. The MongolZ",
    description: "Equipe da Mongólia em rápido crescimento no cenário internacional.",
    image: "https://img-cdn.hltv.org/teamlogo/bRk2sh_tSTO6fq1GLhgcal.png?ixlib=java-2.1.0&w=100&s=1bd99148a19e1e706b543500206901d4",
    link: "https://www.hltv.org/team/6248/the-mongolz",
  },
  {
    name: "5. Natus Vincere",
    description: "Time ucraniano histórico.",
    image: "https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&s=4dd8635be16122656093ae9884675d0c",
    link: "https://www.hltv.org/team/4608/natus-vincere",
  },
  {
    name: "6. FURIA",
    description: "Org brasileira com forte presença e boa consistência no ranking mundial.",
    image: "https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c",
    link: "https://www.hltv.org/team/8297/furia",
  },
  {
    name: "7. FaZe Clan",
    description: "Equipe internacional conhecida por suas estrelas consagradas.",
    image: "https://img-cdn.hltv.org/teamlogo/66pHABGIztb3uoDAU18k76.png?ixlib=java-2.1.0&w=100&s=5d1edd71e1636d78c53c68aa1bcbe9f1",
    link: "https://www.hltv.org/team/6667/faze",
  },
  {
    name: "8. Falcons",
    description: "Time emergente com NiKo e m0NESY, destaque recente em torneios como PGL Bucharest.",
    image: "https://img-cdn.hltv.org/teamlogo/4eJSkDQINNM6Tbs4WvLzkN.png?ixlib=java-2.1.0&w=100&s=01e7f9dd30b34e66f429f43627c2e005",
    link: "https://www.hltv.org/team/11283/falcons",
  },
  {
    name: "9. Aurora",
    description: "Equipe com nomes sólidos como XANTARES.",
    image: "https://img-cdn.hltv.org/teamlogo/yJzPNOeXlyiniNxanYJCrv.png?ixlib=java-2.1.0&w=100&s=f23524510b9d49ea59166e6e2efee1ac",
    link: "https://www.hltv.org/team/11861/aurora",
  },
  {
    name: "10. paiN Gaming",
    description: "Org brasileira com presença persistente entre os 10 melhores.",
    image: "https://img-cdn.hltv.org/teamlogo/x7znFH8_QjLXOQRyR2y7Xp.png?ixlib=java-2.1.0&w=100&s=9d82f86f4573bab52b77611afcddb595",
    link: "https://www.hltv.org/team/4773/pain",
  },
  {
    name: "11. G2 Esports",
    description: "Org europeia com estilo agressivo.",
    image: "https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png?ixlib=java-2.1.0&w=100&s=88aeba1564bc27de69fb2302e47e1a7c",
    link: "https://www.hltv.org/team/5995/g2",
  },
  {
    name: "12. Astralis",
    description: "Lendário time dinamarquês multicampeão, ainda competitivo internacionalmente.",
    image: "https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067",
    link: "https://www.hltv.org/team/6665/astralis",
  },
  {
    name: "13. GamerLegion",
    description: "Time emergente com crescimento constante no ranking global.",
    image: "https://img-cdn.hltv.org/teamlogo/jS__cj2F09Bl8qBU_CvkQR.png?ixlib=java-2.1.0&w=100&s=28ae8e35bdc4bffb0dd245e08235e363",
    link: "https://www.hltv.org/team/9928/gamerlegion",
  },
  {
    name: "14. 3DMAX",
    description: "Equipe em crescimento, ganhando força nos últimos eventos.",
    image: "https://img-cdn.hltv.org/teamlogo/QGPDS3Z2-aMXwCYVgA4RWH.png?ixlib=java-2.1.0&w=100&s=6fdbbfe67b4dd4aecfc2554825d72eea",
    link: "https://www.hltv.org/team/4914/3dmax",
  },
  {
    name: "15. TYLOO",
    description: "Org asiática tradicional, ainda forte no cenário global competitivo.",
    image: "https://img-cdn.hltv.org/teamlogo/hMPKtNMDxp07n3lrBEHCuq.svg?ixlib=java-2.1.0&s=6d22fc4af07d0cd9d31fcd7f3023af9a",
    link: "https://www.hltv.org/team/4863/tyloo",
  },
];

const renderTeams = (search = "") => {
  const container = document.getElementById("teams-list");
  container.innerHTML = "";

  teams
    .filter((team) => team.name.toLowerCase().includes(search.toLowerCase()))
    .forEach((team) => {
      const card = document.createElement("div");
      card.className = "team-card";

      card.innerHTML = `
                <img src="${team.image}" alt="${team.name}">
                <h3>${team.name}</h3>
                <p>${team.description}</p>
                <a href="${team.link}" target="_blank" rel="noopener noreferrer">Ver no HLTV</a>
            `;
      container.appendChild(card);
    });
};

renderTeams();

document.getElementById("input-search").addEventListener("input", (event) => {
  renderTeams(event.target.value);
});
