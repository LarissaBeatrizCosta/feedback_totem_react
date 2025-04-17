document.addEventListener("DOMContentLoaded", function () {
  const firebaseConfig = {
    apiKey: "AIzaSyC73BNQfyRsHXtIBKEJhydETyVpVKrFLkY",
    authDomain: "viacred-c0a61.firebaseapp.com",
    databaseURL: "https://viacred-c0a61-default-rtdb.firebaseio.com",
    projectId: "viacred-c0a61",
    storageBucket: "viacred-c0a61.firebasestorage.app",
    messagingSenderId: "148501289740",
    appId: "1:148501289740:web:85a8c485892ed891be4729",
  };

  firebase.initializeApp(firebaseConfig);
  window.db = firebase.database();

  db.ref(".info/connected").on("value", (snapshot) => {
    if (snapshot.val() === true) {
      console.log("🔥 Conectado ao Firebase!");

      db.ref("connectionTest")
        .set({
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          status: "active",
        })
        .then(() => console.log("✅ Teste de escrita bem-sucedido"))
        .catch((err) => console.error("❌ Erro na escrita:", err));
    } else {
      console.log("⚠️ Desconectado do Firebase");
    }
  });
});
