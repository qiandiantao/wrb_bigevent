$(function() {
    $('#link-reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link-login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })


    //从layui中获取form对象
    var form = layui.form
        //通过form.verify()函数自定义效验规则
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            var pwd = $('.reg-box [name=userPassword]').val()
            if (pwd !== value) {
                return '两次输入的密码不一致';
            }
        }
    })
})