import smtp from 'smtp.js';

const credentials = {
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
        username: "",
        password: ""
    }
}

const smtp = new smtp();
const message = document.getElementById("message");
const email = document.getElementById("input4857");
const name = document.getElementById("input4856");
const file = document.getElementById("file").addEventListener("change", _ => {
    let reader = new FileReader();
    reader.onload(_ => {
        let arrayBuffer = this.result,
            array = new Uint8Array(arrayBuffer),
            binaryString = String.fromCharCode.apply(null, array);
    })

    return reader.readAsArrayBuffer(this.files[0])
}, false);

document.getElementById("button").addEventListener("click", _ => {
    const email = {
        from: email.value,
        to: "notary@smiley-signer.com",
        subject: `Notary inquiry from ${name}`,
        text: message.value,
        attachments: [
            {filename: file.value, content: file}
        ]
    }

    smtp.connect(credentials).then(_ => {
        smtp.send(email);
    })
})

