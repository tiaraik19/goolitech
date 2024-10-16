const daftar = document.getElementById("daftar");

daftar.addEventListener('click', ()=>
{
    const namalengkap = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;
    const handphone = document.getElementById('handphone').value;
    const gender = document.querySelector('input[name="opsi"]:checked');
    event.preventDefault();

    if (namalengkap === "" || email === "" || alamat === "" || handphone === "" || gender === null)
    {
        if (namalengkap === "")
        {
            alert ("Nama harus diisi!");
        }
        else if (email === "")
        {
            alert ("E-mail harus diisi!");
        }
        else if (alamat === "")
        {
            alert ("Alamat harus diisi!");
        }
        else if (handphone === "")
        {
            alert ("No.Handphone harus diisi!");
        }
        else
        {
            alert ("Jenis Kelamin harus diisi!");
        }
        return;
    }

    if (email.substring(email.length - 10, email.length) !== "@gmail.com"){
        alert("E-mail harus di akhiri dengan '@gmail.com'");
        return;
    }

    let handphoneLength = handphone.length;
    for (let i=0 ; i<handphoneLength ; i++)
    {
        let asciiValue = handphone.charCodeAt(i);
        if (asciiValue < 48 || asciiValue > 57)
        {
            alert ("No. Handphone tidak valid!");
            return;
        }
    }
    if (handphoneLength < 10)
    {
        alert("No. Handphone minimal 10 angka!");
        return;
    }
    else if (handphoneLength > 13)
    {
        alert("No. Handphone maksimal 10 angka!");
        return;
    }

    const formTiara = document.getElementById("formTiara");
    formTiara.reset();
    alert("Selamat, anda telah menjadi member GOLITECH!");
})
