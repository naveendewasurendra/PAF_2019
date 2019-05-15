$("#users_userlist").ready(function () {

    $.ajax("http://localhost:8080/sellnbye/api/user", {
        contentType: 'application/json',
        type: 'GET'
    }).done(function (response) {
        var newItem = "";
        $.each(response, function (index, value) {

            newItem += `<hr class="soften">
            <div class="row-fluid">
                <div class="span2">
                    <img src="${value.profilePicture}" alt="" height="130" width="100">
                </div>
                <div class="span6">
                    <h5>${value.username}</h5>
                    <p>
                        ${value.email}
                    </p>
                    </br>
                    <p>
                        ${value.contactNo}
                    </p>
                </div>
                <div class="span4 alignR">
                    <form class="form-horizontal qtyFrm">
                        <h3> ${value.userType}</h3><br>
                        <div class="btn-group">
                            <a href="product_details.html" class="shopBtn">EDIT</a>
                        </div>
                    </form>
                </div>
            </div>`;
        });

        $("#users_userlist").append(newItem);
    });
});

$("#login_form").submit(function (event) {
    event.preventDefault();
    data = {
        "password": SHA256($("#login_inputPassword").val()).toUpperCase(),
        "username": $("#login_inputUserName").val()
    }
    $.ajax("http://localhost:8080/sellnbye/api/user/login", {
        data: JSON.stringify(data),
        contentType: 'application/json',
        type: 'POST'
    }).done(function (response) {
        console.log(response);
    });
});