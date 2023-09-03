const anitime = 300
$('.unit').mouseenter(function(){
  $('.in')
  .animate({marginTop:'-80px'},{duration: anitime})
  $('.pic_in')
  .animate({margin:'10px',width:'280px',height:'180px'},{duration: anitime})
  $('.image')
  .animate({marginLeft:'-25px',marginTop:'-20px',width:'330px',height:'220px'},{duration: anitime})
})
$('.unit').mouseleave(function(){
  $('.in')
  .animate({marginTop:'0'},{duration: anitime})
  $('.pic_in')
  .animate({margin:'0',width:'300px',height:'200px'},{duration: anitime})
  $('.image')
  .animate({marginTop:'0',marginLeft:'0',width:'300px',height:'200px'},{duration: anitime})
})
