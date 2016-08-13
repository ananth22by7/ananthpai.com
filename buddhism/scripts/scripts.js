$(document).ready(function(){


    var isOverlay = false;

    $(".btn-close").click(function(){
      $(".info-box").not("#info-main").hide();
    });

    $(".background img").mouseover(function(){
      $(this).css("opacity", "1");
      $("#overlay").css("opacity", "0.6");
    });//to trigger overlay
    $(".background img").mouseout(function(){
      $(this).css("opacity", "0");
      $("#overlay").css("opacity", "0");
    }); //to un-trigger overlay

    $("#centre-lotus-1, #centre-lotus-2").mouseover(function(){
      $(this).css("opacity", "1");
      $("#centre-lotus-1, #centre-lotus-2").css("opacity", "1");
        isOverlay = !isOverlay;

    });
    $("#centre-lotus-1, #centre-lotus-2").mouseout(function(){
      $(this).css("opacity", "0");
      $("#centre-lotus-1, #centre-lotus-2").css("opacity", "0");
    });

    $("#north-hand-main, #north-vajra").mouseover(function(){
      $(this).css("opacity", "1");
      $("#north-hand-main, #north-vajra").css("opacity", "1");
    });
    $("#north-hand-main, #north-vajra").mouseout(function(){
      $(this).css("opacity", "0");
      $("#north-hand-main, #north-vajra").css("opacity", "0");
    });

    $("#north-hand-sub-1").mouseover(function(){
      $(this).css("opacity", "1");
      $("#north-hand-sub-2").css("opacity", "1");
    });
    $("#north-hand-sub-1").mouseout(function(){
      $(this).css("opacity", "0");
      $("#north-hand-sub-2").css("opacity", "0");
    });
    $("#north-hand-sub-2").mouseover(function(){
      $(this).css("opacity", "1");
      $("#north-hand-sub-1").css("opacity", "1");
    });
    $("#north-hand-sub-2").mouseout(function(){
      $(this).css("opacity", "0");
      $("#north-hand-sub-1").css("opacity", "0");
    });

    $("#west-lotus-1").mouseover(function(){
      $(this).css("opacity", "1");
      $("#west-lotus-2").css("opacity", "1");
    });
    $("#west-lotus-1").mouseout(function(){
      $(this).css("opacity", "0");
      $("#west-lotus-2").css("opacity", "0");
    });
    $("#west-lotus-2").mouseover(function(){
      $(this).css("opacity", "1");
      $("#west-lotus-1").css("opacity", "1");
    });
    $("#west-lotus-2").mouseout(function(){
      $(this).css("opacity", "0");
      $("#west-lotus-1").css("opacity", "0");
    });

    $("#south-chintamani").mouseover(function(){
      $(this).css("opacity", "1");
      $("#south-hand-main").css("opacity", "1");
    });
    $("#south-chintamani").mouseout(function(){
      $(this).css("opacity", "0");
      $("#south-hand-main").css("opacity", "0");
    });
    $("#south-hand-main").mouseover(function(){
      $(this).css("opacity", "1");
      $("#south-chintamani").css("opacity", "1");
    });
    $("#south-hand-main").mouseout(function(){
      $(this).css("opacity", "0");
      $("#south-chintamani").css("opacity", "0");
    });

    $("#south-lotus").mouseover(function(){
      $(this).css("opacity", "1");
      $("#south-hand-sub").css("opacity", "1");
    });
    $("#south-lotus").mouseout(function(){
      $(this).css("opacity", "0");
      $("#south-hand-sub").css("opacity", "0");
    });
    $("#south-hand-sub").mouseover(function(){
      $(this).css("opacity", "1");
      $("#south-lotus").css("opacity", "1");
    });
    $("#south-hand-sub").mouseout(function(){
      $(this).css("opacity", "0");
      $("#south-lotus").css("opacity", "0");
    });

    $("#east-hand-main").mouseover(function(){
      $(this).css("opacity", "1");
      $("#east-vajra").css("opacity", "1");
    });
    $("#east-hand-main").mouseout(function(){
      $(this).css("opacity", "0");
      $("#east-vajra").css("opacity", "0");
    });
    $("#east-vajra").mouseover(function(){
      $(this).css("opacity", "1");
      $("#east-hand-main").css("opacity", "1");
    });
    $("#east-vajra").mouseout(function(){
      $(this).css("opacity", "0");
      $("#east-hand-main").css("opacity", "0");
    });

    $("#east-hand-main").mouseover(function(){
      $(this).css("opacity", "1");
      $("#east-vajra").css("opacity", "1");
    });
    $("#east-hand-main").mouseout(function(){
      $(this).css("opacity", "0");
      $("#east-vajra").css("opacity", "0");
    });
    $("#east-vajra").mouseover(function(){
      $(this).css("opacity", "1");
      $("#east-hand-main").css("opacity", "1");
    });
    $("#east-vajra").mouseout(function(){
      $(this).css("opacity", "0");
      $("#east-hand-main").css("opacity", "0");
    });

    $("#east-hand-sub-1").mouseover(function(){
      $(this).css("opacity", "1");
      $("#east-hand-sub-2").css("opacity", "1");
    });
    $("#east-hand-sub-1").mouseout(function(){
      $(this).css("opacity", "0");
      $("#east-hand-sub-2").css("opacity", "0");
    });
    $("#east-hand-sub-2").mouseover(function(){
      $(this).css("opacity", "1");
      $("#east-hand-sub-1").css("opacity", "1");
    });
    $("#east-hand-sub-2").mouseout(function(){
      $(this).css("opacity", "0");
      $("#east-hand-sub-1").css("opacity", "0");
    });

    $("#centre-hands").click(function(){
      $(".info-box").not("#info-main, #centre-main").hide();
      $("#centre-main").toggle();
        if (isOverlay === true) {
            $("#overlay").css("opacity", "0.6");
        }
    });

    $("#centre-lotus-1, #centre-lotus-2").click(function(){
      $(".info-box").not("#info-main, #centre-sub").hide();
      $("#centre-sub, #btn-close").toggle();
      // $("#btn-close").show();
    });

    $("#west-hands").click(function(){
      $(".info-box").not("#info-main, #west-main").hide();
      $("#west-main, #btn-close").toggle();
      // $("#btn-close").show();
    });

    $("#west-lotus-1, #west-lotus-2").click(function(){
      $(".info-box").not("#info-main, #west-sub").hide();
      $("#west-sub, #btn-close").toggle();
      // $("#btn-close").show();
    });

    $("#east-hand-main, #east-vajra").click(function(){
      $(".info-box").not("#info-main, #east-main").hide();
      $("#east-main, #btn-close").toggle();
      // $("#btn-close").show();
    });

    $("#east-hand-sub-1, #east-hand-sub-2").click(function(){
        $(".info-box").not("#info-main, #east-sub").hide();
        $("#east-sub, #btn-close").toggle();
    });

    $("#north-hand-main, #north-vajra").click(function(){
        $(".info-box").not("#info-main, #north-main").hide();
        $("#north-main, #btn-close").toggle();
    });

    $("#north-hand-sub-1, #north-hand-sub-2").click(function(){
        $(".info-box").not("#info-main, #north-sub").hide();
        $("#north-sub, #btn-close").toggle();
    });

    $("#south-hand-main, #south-chintamani").click(function(){
        $(".info-box").not("#info-main, #south-main").hide();
        $("#south-main, #btn-close").toggle();
    });

    $("#south-hand-sub, #south-lotus").click(function(){
        $(".info-box").not("#info-main, #south-sub").hide();
        $("#south-sub, #btn-close").toggle();
    });

    $("#corner-lotus, .symbol-lotus").click(function(){
      $(".info-box").not("#info-main, #lotus-box").hide();
      $("#lotus-box, #btn-close").toggle();
      // $("#btn-close").show();
    });

    $("#corner-conch, .symbol-conch").click(function(){
        $(".info-box").not("#info-main, #conch-box").hide();
        $("#conch-box, #btn-close").toggle();
    });

    $("#corner-dhvaja, .symbol-dhvaja").click(function(){
        $(".info-box").not("#info-main, #dhvaja-box").hide();
        $("#dhvaja-box, #btn-close").toggle();
    });

    $("#corner-parasol, .symbol-parasol").click(function(){
        $(".info-box").not("#info-main, #parasol-box").hide();
        $("#parasol-box, #btn-close").toggle();
    });

    $("#corner-fish, .symbol-fish").click(function(){
        $(".info-box").not("#info-main, #fish-box").hide();
        $("#fish-box, #btn-close").toggle();
    });

    $("#corner-knot, .symbol-knot").click(function(){
        $(".info-box").not("#info-main, #knot-box").hide();
        $("#knot-box, #btn-close").toggle();
    });

    $("#corner-dharmachakra, .symbol-dharmachakra").click(function(){
        $(".info-box").not("#info-main, #dharmachakra-box").hide();
        $("#dharmachakra-box, #btn-close").toggle();
    });

    $("#corner-vase, .symbol-vase").click(function(){
        $(".info-box").not("#info-main, #vase-box").hide();
        $("#vase-box, #btn-close").toggle();
    });

});