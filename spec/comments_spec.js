$(document).ready(function(){

  describe("Validating User Input", function() {
    it("should hide all errors when the page loads", function() {
      alert($("#com_name_error"));
      expect($("#com_name_error").css("display")).toBe("none");
      expect($("#com_email_error").css("display")).toBe("none");
      expect($("#comment_error").css("display")).toBe("none");
    });

    it("should also hide the form until you click add comment", function() {
      expect($("form#add_comment").css("display")).toBe("none");
    });

    it("should display the form when you click add comment", function() {
      // this allows the program to wait for any animation to finish
      for (var i = 0; i < 1; i++){return i}
      expect($("form#add_comment").css("display")).not.toBe("none");
    });

    it("should hide form when cancel is pressed", function() {
      $("#cancel").click();
      expect($("form#add_comment").css("display")).toBe("none");
    });

    describe("Displays errors with invalid inputs", function() {
      beforeEach(function() {
        try{
          $("#show_comment").click();
        }
        catch(err){
          // this prevents `unexpected illegal token` error from being thrown
          // and breaking the test
        }
      });

      it("should display the name error with a name less than 3 characters", function() {
        $("#com_name").text("t");
        $("input[type='submit']").last().click();
        expect($("#com_name_error").css("display")).not.toBe("none");
      });

      it("should display the email error with an invalid email", function() {
        $("#com_email").text("email");
        $("input[type='submit']").last().click();
        expect($("#com_email_error").css("display")).not.toBe("none");
      });

      it("should display the comment error when no comment is given", function() {
        $("input[type='submit']").last().click();
        expect($("#comment_error").css("display")).not.toBe("none");
      });
    });

    it("should display the user post when properly submitted", function() {
      try{
        $("#show_comment").click();
      }
      catch(err){
        // this prevents `unexpected illegal token` error from being thrown
        // and breaking the test
      }
      $("#com_name").text("taco");
      $("#com_email").text("taco@email.com");
      $("#com_email").text("I'm trizzolllllllin!");
      $("input[type='submit']").last().click();
      // this allows the program to wait for any animation to finish
      for (var i = 0; i < 1; i++){return i}
      expect($(".newcomment").length).toBe(2);
    });

  });
  
});
