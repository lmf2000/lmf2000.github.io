$(function(){
	$('.parent').click(function(){   // 获取所谓的父行
			$(this)
				.siblings('.child_'+this.id).toggle(300);  // 隐藏/显示所谓的子行
	}).click();
})