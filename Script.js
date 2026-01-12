document.getElementById("calculate").addEventListener("click", () => {
  const birthStr = document.getElementById("birth").value.trim();

  if (birthStr.length !== 8 || isNaN(birthStr)) {
    document.getElementById("result").textContent = "Envoie ta date de naissance au format JJMMYYYY";
    return;
  }

  const birthDay = parseInt(birthStr.substring(0,2),10);
  const birthMonth = parseInt(birthStr.substring(2,4),10);
  const birthYear = parseInt(birthStr.substring(4,8),10);

  const birth = new Date(birthYear, birthMonth - 1, birthDay);
  const today = new Date();

  let ageYears = today.getFullYear() - birth.getFullYear();
  let ageMonths = today.getMonth() - birth.getMonth();
  if (today.getDate() < birth.getDate()) ageMonths -= 1;
  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  const targetYears = 81;
  const remainingMonths = targetYears*12 - (ageYears*12 + ageMonths);

  const paliers = [4,6,8];
  let reportResults = "";

  paliers.forEach(p => {
    const first = remainingMonths - p;
    const second = first - 6;
    reportResults += `Pallier ${p} mois = ${first}, avec -6 mois = ${second}\n`;
  });

  document.getElementById("result").textContent =
    `Âge : ${ageYears} ans et ${ageMonths} mois\n` +
    `Mois restants jusqu'à ${targetYears} ans : ${remainingMonths}\n` +
    reportResults;
});
