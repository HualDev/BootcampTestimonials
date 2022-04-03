document.getElementById('next').addEventListener('click',()=>{
    document.getElementById('tanya').style.display='none'
    document.getElementById('john').style.display='flex'
})

document.getElementById('preview').addEventListener('click',()=>{
    document.getElementById('john').style.display='none'
    document.getElementById('tanya').style.display='flex'
})