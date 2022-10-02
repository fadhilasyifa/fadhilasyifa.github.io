$(document).ready(function(){
    $('.kolom').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_baris = rid[1];
        let nama_mhs = $('#nama_mhs__'+id_baris).text();

        if(isi=='Hapus'){
            let yakin = confirm(`Yakin mau menghapus data atas nama ${nama_mhs} ??`);
            if(!yakin) return;

            $('#baris__'+id_baris).fadeOut();
        }else {
            alert('Aksi lain untuk kolom ini belum ada. Terimakasih sudah mencoba');
        }
    })
})