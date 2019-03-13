$(document).ready(function() {
  // LIBRARIES CODE
  function TestRadioButtons() {
    lib_instance = "xbzb423sbe";
    com.fc.JavaScriptDistLib.EventListeners.mapLib("TestRadioButtons", "xbzb423sbe");
    testradiobuttons_varmap = {};
    testradiobuttons_varmap._debugService = null;

    function RadioButtonsUIComponent() {
      lib_instance = "6d325088ug";
      com.fc.JavaScriptDistLib.EventListeners.mapLib("RadioButtonsUIComponent", "6d325088ug");
      radiobuttonsuicomponent_varmap = {};
      radiobuttonsuicomponent_varmap._debugService = null;
      radiobuttonsuicomponent_varmap.singlechoice_form = null;
      radiobuttonsuicomponent_varmap.singlechoice_chosen = null;
      /**
       * Describe this function...
       */
      this.isSelected = isSelected;

      function isSelected(index) {
        // Block#: .`OdvDU3D/%[wq(}jJG~
        if(radiobuttonsuicomponent_varmap.singlechoice_chosen == null) {
          return false;
        }
        // Block#: z]r4k3M;!jX8E/v%Ofx@
        if(radiobuttonsuicomponent_varmap.singlechoice_chosen == (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options'))[index], 'name'))) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getChoiceNum = getChoiceNum;

      function getChoiceNum() {
        // Block#: W(5zoR4P]hIe;;[$m`*N
        if(radiobuttonsuicomponent_varmap.singlechoice_form == null) {
          return 0;
        }
        return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options')).length;
      }
      /**
       * Returns the selected choice.
       */
      this.getRadioButtonsValue = getRadioButtonsValue;

      function getRadioButtonsValue() {
        return radiobuttonsuicomponent_varmap.singlechoice_chosen;
      }
      /**
       * This function will show or hide the input from screen layout.
       */
      this.show = show;

      function show() {
        return new Promise(function(resolve, reject) {
          // Block#: dq8@(Uf|R]WXAG8t!$J,
          if(!($('[obj-name="_dummyRadioButtonsInput3"]').is(':visible'))) {
            // Block#: @#T]KSB}1ilGi6vn}e}S
            $('[obj-name="_dummyRadioButtonsInput3_RadioButtons"]').show();
          }
        });
      }
      /**
       * This function will show or hide the input from screen layout.
       */
      this.hide = hide;

      function hide() {
        return new Promise(function(resolve, reject) {
          // Block#: ){`OBoW}_`?@Lc?$3o}Y
          if($('[obj-name="_dummyRadioButtonsInput3"]').is(':visible')) {
            // Block#: eZl%)A*6SR@[,5)%I%#q
            $('[obj-name="_dummyRadioButtonsInput3_RadioButtons"]').hide();
          }
        });
      }
      /**
       * Generates the choice list for radio buttons using field from api response.
       */
      this.setRadioButtons = setRadioButtons;

      function setRadioButtons(field) {
        return new Promise(function(resolve, reject) {
          // Block#: G:5v5K((+6C1^^D#/3ul
          if(field != null) {
            // Block#: z4r{x-mg/uwNvy;f3Of(
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'type'), "EQUAL", 'radio-buttons')) {
              // Block#: p~spO)y=pN+#n!Omq7[j
              radiobuttonsuicomponent_varmap.singlechoice_form = field;
              // Block#: V4%Of.N%PMWuZNF.D7d=
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("RadioButtonsInput3_RadioLabel", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))); // Block#: VK-,dGCII-*;fuEP]z@3
              if((com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(field, 'value')) && (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')) != null) {
                // Block#: =h%9*,QnPO|=D;b[jenN
                radiobuttonsuicomponent_varmap.singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value'));
              }
              // Block#: LY%*1/0]Wp@pf~j$G@a|
              hideError().then(response => {;
              });
              // Block#: cDOYpi.Z5Lo*@[{cX}13
              com.fc.JavaScriptDistLib.ListView.saveTemplateCell('RadioButtonsInput3_RadioButtons');
              com.fc.JavaScriptDistLib.ListView.removeAllCells('RadioButtonsInput3_RadioButtons');
              on_listview_length_configured_RadioButtonsInput3_RadioButtons();
              // Block#: h3VcUUX2,h`pR7cS)te!
              $('[obj-name="_dummyRadioButtonsInput3_RadioButtons"]').show();
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.hasRadioButtonsValue = hasRadioButtonsValue;

      function hasRadioButtonsValue() {
        // Block#: *H_iL#,[YVeRl)N/6|vI
        var index_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options')).length;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: 6F6=lV9*R84H|tGz?0Xe
          if(isSelected(index)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.resetRadioButtonsValues = resetRadioButtonsValues;

      function resetRadioButtonsValues() {
        return new Promise(function(resolve, reject) {
          // Block#: Q*5AD*m_(L5eB;h6t.[c
          var index_end2 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options')).length;
          var index_inc2 = 1;
          if(0 > index_end2) {
            index_inc2 = -index_inc2;
          }
          for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
            // Block#: #{gsPcm)Z2[T~;gU4d%Y
            radiobuttonsuicomponent_varmap.singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options'))[index], 'name'));
            // Block#: P4cFFEAAaW9dN-g8bwK#
            if(isSelected(index)) {
              // Block#: Qe~ZOiOFghg]QP:%]N~Z
              com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options'))[index], 'value', true);
            }
            // Block#: QyIIE6+BKI@h3HqR9I`9
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('RadioButtonsInput3_RadioButtons');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('RadioButtonsInput3_RadioButtons');
            on_listview_length_configured_RadioButtonsInput3_RadioButtons();
          }
        });
      }
      /**
       * This will hide error message.
       */
      this.hideError = hideError;

      function hideError() {
        return new Promise(function(resolve, reject) {
          // Block#: }N(6DKS#9;!@0+x`_p;#
          $('[obj-name="_dummyRadioButtonsInput3_ErrorMsg"]').hide();
        });
      }
      /**
       * This function will set error text given the provided
       * message. The error will show up right after the update.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
          // Block#: 9!fwE1..,ln6b[1C9++v
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("RadioButtonsInput3_ErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: w|z*Kj/z-:7)qb6N.9Hp
          $('[obj-name="_dummyRadioButtonsInput3_ErrorMsg"]').show();
        });
      }
      /**
       * If input requires a value, it will check if user selected a choice or not.
       */
      this.isValid = isValid;

      function isValid() {
        // Block#: 27Xs)+-sake0^RKl?bn4
        if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'required')) && radiobuttonsuicomponent_varmap.singlechoice_chosen == null) {
          return false;
        }
        return true;
      }
      // Block#: *-1*q`=;3lMIUq(x,NI-
      function on_listview_cell_configured_RadioButtonsInput3_RadioBtnElement(RadioButtonsInput3_RadioBtnElement, number) {
        try {
          // Block#: ,hcxE;uS}_%#NH+dp[Z=
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("RadioButtonsInput3_RadioOption", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options'))[number], 'name'))); // Block#: 79i3]n)?$;$IB`l$a+(X
          if(isSelected(number)) {
            // Block#: ~Yc$r6_[{uPJ{Sqf#~?}
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("RadioButtonsInput3_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.mynewproject5/click.snapp.user81.radiobuttonsuicomponent/checked.png")));
          } else {
            // Block#: y,*?Rb^m(1m*qDe+v5)=
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("RadioButtonsInput3_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.mynewproject5/click.snapp.user81.radiobuttonsuicomponent/unchecked.png")));
          }
          // Block#: J5w,4.z~*ce{b#Os6xA_
          if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'readOnly')) {
            // Block#: JiP.PT%Pl7799}RK%Uov
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput3_RadioBtnElement, 50);
          } else {
            // Block#: |.+UQkG;XK%##Z{duP0L
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput3_RadioBtnElement, 100);
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      com.fc.JavaScriptDistLib.ListView.setConfigCallback('RadioButtonsInput3_RadioBtnElement', on_listview_cell_configured_RadioButtonsInput3_RadioBtnElement);
      // Block#: (U/IY;mnw@+LI-)RKeMG
      function on_listview_cell_clicked_RadioButtonsInput3_RadioBtnElement(RadioButtonsInput3_RadioBtnElement, number) {
        try {
          // Block#: CXG4lYA:qPMm8@sr]E*V
          if(!(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'readOnly'))) {
            // Block#: 8s0%[R(WDaZ54sI8VTg*
            radiobuttonsuicomponent_varmap.singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options'))[number], 'name'));
            // Block#: ES/3qD5cnIf;ZuYHC$$0
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('RadioButtonsInput3_RadioButtons');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('RadioButtonsInput3_RadioButtons');
            on_listview_length_configured_RadioButtonsInput3_RadioButtons();
            // Block#: AT*/2w#7yVc)iS,}pJO@
            hideError().then(response => {;
            });
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      }
      com.fc.JavaScriptDistLib.ListView.setClickCallback('RadioButtonsInput3_RadioBtnElement', on_listview_cell_clicked_RadioButtonsInput3_RadioBtnElement);
      // Block#: o34rL]Kq2N9/xW1L@Nm2
      function on_listview_length_configured_RadioButtonsInput3_RadioButtons() {
        try {
          com.fc.JavaScriptDistLib.ListView.configureCells('RadioButtonsInput3_RadioButtons', getChoiceNum());
          $('[obj-name="_dummyRadioButtonsInput3_RadioButtons"]').children().each(function(i) {
            if(i >= 0) {
              com.fc.JavaScriptDistLib.ListView.setContext($(this));
              com.fc.JavaScriptDistLib.ListView.executeConfigCallback('RadioButtonsInput3_RadioButtons', $(this), i);
              com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('RadioButtonsInput3_RadioButtons', $(this), i);
              com.fc.JavaScriptDistLib.ListView.resetContext($(this));
            }
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
    };
    var radiobuttonsuicomponent = new RadioButtonsUIComponent();

    function RadioButtonsUIComponent_RadioButtonsInput(instance) {
      lib_instance = "6d325088ug" + instance;
      com.fc.JavaScriptDistLib.EventListeners.mapLib("RadioButtonsUIComponent_" + instance, "6d325088ug" + instance);
      radiobuttonsuicomponent_varmap[instance] = {};
      radiobuttonsuicomponent_varmap[instance]._debugService = null;
      radiobuttonsuicomponent_varmap[instance].singlechoice_form = null;
      radiobuttonsuicomponent_varmap[instance].singlechoice_chosen = null;
      /**
       * Describe this function...
       */
      this.isSelected = isSelected;

      function isSelected(index) {
        // Block#: .`OdvDU3D/%[wq(}jJG~
        if(radiobuttonsuicomponent_varmap[instance].singlechoice_chosen == null) {
          return false;
        }
        // Block#: z]r4k3M;!jX8E/v%Ofx@
        if(radiobuttonsuicomponent_varmap[instance].singlechoice_chosen == (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options'))[index], 'name'))) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getChoiceNum = getChoiceNum;

      function getChoiceNum() {
        // Block#: W(5zoR4P]hIe;;[$m`*N
        if(radiobuttonsuicomponent_varmap[instance].singlechoice_form == null) {
          return 0;
        }
        return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options')).length;
      }
      /**
       * Returns the selected choice.
       */
      this.getRadioButtonsValue = getRadioButtonsValue;

      function getRadioButtonsValue() {
        return radiobuttonsuicomponent_varmap[instance].singlechoice_chosen;
      }
      /**
       * This function will show or hide the input from screen layout.
       */
      this.show = show;

      function show() {
        return new Promise(function(resolve, reject) {
          // Block#: dq8@(Uf|R]WXAG8t!$J,
          if(!($('[obj-name="' + instance + '"]').is(':visible'))) {
            // Block#: @#T]KSB}1ilGi6vn}e}S
            $('[obj-name="' + instance + '_RadioButtons"]').show();
          }
        });
      }
      /**
       * This function will show or hide the input from screen layout.
       */
      this.hide = hide;

      function hide() {
        return new Promise(function(resolve, reject) {
          // Block#: ){`OBoW}_`?@Lc?$3o}Y
          if($('[obj-name="' + instance + '"]').is(':visible')) {
            // Block#: eZl%)A*6SR@[,5)%I%#q
            $('[obj-name="' + instance + '_RadioButtons"]').hide();
          }
        });
      }
      /**
       * Generates the choice list for radio buttons using field from api response.
       */
      this.setRadioButtons = setRadioButtons;

      function setRadioButtons(field) {
        return new Promise(function(resolve, reject) {
          // Block#: G:5v5K((+6C1^^D#/3ul
          if(field != null) {
            // Block#: z4r{x-mg/uwNvy;f3Of(
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'type'), "EQUAL", 'radio-buttons')) {
              // Block#: p~spO)y=pN+#n!Omq7[j
              radiobuttonsuicomponent_varmap[instance].singlechoice_form = field;
              // Block#: V4%Of.N%PMWuZNF.D7d=
              com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_RadioLabel", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'name'))); // Block#: VK-,dGCII-*;fuEP]z@3
              if((com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(field, 'value')) && (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value')) != null) {
                // Block#: =h%9*,QnPO|=D;b[jenN
                radiobuttonsuicomponent_varmap[instance].singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(field, 'value'));
              }
              // Block#: LY%*1/0]Wp@pf~j$G@a|
              hideError().then(response => {;
              });
              // Block#: cDOYpi.Z5Lo*@[{cX}13
              com.fc.JavaScriptDistLib.ListView.saveTemplateCell(instance + '_RadioButtons');
              com.fc.JavaScriptDistLib.ListView.removeAllCells(instance + '_RadioButtons');
              on_listview_length_configured_RadioButtonsInput3_RadioButtons();
              // Block#: h3VcUUX2,h`pR7cS)te!
              $('[obj-name="' + instance + '_RadioButtons"]').show();
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.hasRadioButtonsValue = hasRadioButtonsValue;

      function hasRadioButtonsValue() {
        // Block#: *H_iL#,[YVeRl)N/6|vI
        var index_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options')).length;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: 6F6=lV9*R84H|tGz?0Xe
          if(isSelected(index)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.resetRadioButtonsValues = resetRadioButtonsValues;

      function resetRadioButtonsValues() {
        return new Promise(function(resolve, reject) {
          // Block#: Q*5AD*m_(L5eB;h6t.[c
          var index_end2 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options')).length;
          var index_inc2 = 1;
          if(0 > index_end2) {
            index_inc2 = -index_inc2;
          }
          for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
            // Block#: #{gsPcm)Z2[T~;gU4d%Y
            radiobuttonsuicomponent_varmap[instance].singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options'))[index], 'name'));
            // Block#: P4cFFEAAaW9dN-g8bwK#
            if(isSelected(index)) {
              // Block#: Qe~ZOiOFghg]QP:%]N~Z
              com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options'))[index], 'value', true);
            }
            // Block#: QyIIE6+BKI@h3HqR9I`9
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell(instance + '_RadioButtons');
            com.fc.JavaScriptDistLib.ListView.removeAllCells(instance + '_RadioButtons');
            on_listview_length_configured_RadioButtonsInput3_RadioButtons();
          }
        });
      }
      /**
       * This will hide error message.
       */
      this.hideError = hideError;

      function hideError() {
        return new Promise(function(resolve, reject) {
          // Block#: }N(6DKS#9;!@0+x`_p;#
          $('[obj-name="' + instance + '_ErrorMsg"]').hide();
        });
      }
      /**
       * This function will set error text given the provided
       * message. The error will show up right after the update.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
          // Block#: 9!fwE1..,ln6b[1C9++v
          com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_ErrorMsg", (com.fc.JavaScriptDistLib.TextLib.convertToText(message))); // Block#: w|z*Kj/z-:7)qb6N.9Hp
          $('[obj-name="' + instance + '_ErrorMsg"]').show();
        });
      }
      /**
       * If input requires a value, it will check if user selected a choice or not.
       */
      this.isValid = isValid;

      function isValid() {
        // Block#: 27Xs)+-sake0^RKl?bn4
        if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'required')) && radiobuttonsuicomponent_varmap[instance].singlechoice_chosen == null) {
          return false;
        }
        return true;
      }
      // Block#: *-1*q`=;3lMIUq(x,NI-
      function on_listview_cell_configured_RadioButtonsInput3_RadioBtnElement(RadioButtonsInput3_RadioBtnElement, number) {
        try {
          // Block#: ,hcxE;uS}_%#NH+dp[Z=
          com.fc.JavaScriptDistLib.Label.setProperty["Text"](instance + "_RadioOption", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options'))[number], 'name'))); // Block#: 79i3]n)?$;$IB`l$a+(X
          if(isSelected(number)) {
            // Block#: ~Yc$r6_[{uPJ{Sqf#~?}
            com.fc.JavaScriptDistLib.Image.setProperty["Image"](instance + "_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.mynewproject5/click.snapp.user81.radiobuttonsuicomponent/checked.png")));
          } else {
            // Block#: y,*?Rb^m(1m*qDe+v5)=
            com.fc.JavaScriptDistLib.Image.setProperty["Image"](instance + "_RadioIcon", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.mynewproject5/click.snapp.user81.radiobuttonsuicomponent/unchecked.png")));
          }
          // Block#: J5w,4.z~*ce{b#Os6xA_
          if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'readOnly')) {
            // Block#: JiP.PT%Pl7799}RK%Uov
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput3_RadioBtnElement, 50);
          } else {
            // Block#: |.+UQkG;XK%##Z{duP0L
            com.fc.JavaScriptDistLib.ListView.setProperty["Alpha"](RadioButtonsInput3_RadioBtnElement, 100);
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
      com.fc.JavaScriptDistLib.ListView.setConfigCallback(instance + '_RadioBtnElement', on_listview_cell_configured_RadioButtonsInput3_RadioBtnElement);
      // Block#: (U/IY;mnw@+LI-)RKeMG
      function on_listview_cell_clicked_RadioButtonsInput3_RadioBtnElement(RadioButtonsInput3_RadioBtnElement, number) {
        try {
          // Block#: CXG4lYA:qPMm8@sr]E*V
          if(!(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'readOnly'))) {
            // Block#: 8s0%[R(WDaZ54sI8VTg*
            radiobuttonsuicomponent_varmap[instance].singlechoice_chosen = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options'))[number], 'name'));
            // Block#: ES/3qD5cnIf;ZuYHC$$0
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell(instance + '_RadioButtons');
            com.fc.JavaScriptDistLib.ListView.removeAllCells(instance + '_RadioButtons');
            on_listview_length_configured_RadioButtonsInput3_RadioButtons();
            // Block#: AT*/2w#7yVc)iS,}pJO@
            hideError().then(response => {;
            });
          }
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      }
      com.fc.JavaScriptDistLib.ListView.setClickCallback(instance + '_RadioBtnElement', on_listview_cell_clicked_RadioButtonsInput3_RadioBtnElement);
      // Block#: o34rL]Kq2N9/xW1L@Nm2
      function on_listview_length_configured_RadioButtonsInput3_RadioButtons() {
        try {
          com.fc.JavaScriptDistLib.ListView.configureCells(instance + '_RadioButtons', getChoiceNum());
          $('[obj-name="' + instance + '_RadioButtons"]').children().each(function(i) {
            if(i >= 0) {
              com.fc.JavaScriptDistLib.ListView.setContext($(this));
              com.fc.JavaScriptDistLib.ListView.executeConfigCallback(instance + '_RadioButtons', $(this), i);
              com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback(instance + '_RadioButtons', $(this), i);
              com.fc.JavaScriptDistLib.ListView.resetContext($(this));
            }
          });
        } catch(e) {
          com.fc.JavaScriptDistLib.handleExceptionNative(e);
        }
      };
    };
    var radiobuttonsuicomponent = new RadioButtonsUIComponent();
    var radiobuttonsuicomponent_RadioButtonsInput3 = new RadioButtonsUIComponent_RadioButtonsInput("RadioButtonsInput3");
    var radiobuttonsuicomponent_RadioButtonsInput = new RadioButtonsUIComponent_RadioButtonsInput("RadioButtonsInput");
    /**
     * Describe this function...
     */
    // Returns the selected choice.
    this.getUpper = getUpper;

    function getUpper() {
      return radiobuttonsuicomponent_RadioButtonsInput3.getRadioButtonsValue();
    }
    /**
     * Describe this function...
     */
    // Returns the selected choice.
    this.getLower = getLower;

    function getLower() {
      return radiobuttonsuicomponent_RadioButtonsInput.getRadioButtonsValue();
    }
    /**
     * Describe this function...
     */
    this.initialized = initialized;

    function initialized() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("initialized", "xbzb423sbe", []);
      });
    }
    /**
     * Describe this function...
     */
    this.read = read;

    function read() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("read", "xbzb423sbe", []);
      });
    }
    /**
     * Describe this function...
     */
    this.init = init;

    function init() {
      return new Promise(function(resolve, reject) {
        // Generates the choice list for radio buttons using field from api response.
        // Block#: v$*I=rv*hAiE31x/ON@:
        radiobuttonsuicomponent_RadioButtonsInput3.setRadioButtons(com.fc.JavaScriptDistLib.Dictionary.createDictionary(['readOnly', 'name', 'options', 'type'], [false, 'Choose a color:', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name'], ['Red', 'Red']), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name'], ['Yellow', 'Yellow']), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name'], ['Blue', 'Blue'])], 'radio-buttons'])).then(response => {;
        });
        // Generates the choice list for radio buttons using field from api response.
        // Block#: %5;X|Kt=F{mR5|mX|Z}$
        radiobuttonsuicomponent_RadioButtonsInput.setRadioButtons(com.fc.JavaScriptDistLib.Dictionary.createDictionary(['readOnly', 'name', 'options', 'type'], [false, 'Choose a friend:', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name'], ['Cat', 'Cat']), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name'], ['Dog', 'Dog']), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name'], ['Hippo', 'Hippo'])], 'radio-buttons'])).then(response => {;
        });
      });
    }
    // Block#: ]ZcQ^#ULrsDW7iB:J+18
    function on_BtnInit_click(e) {
      try {
        // Block#: k:B-*FjmR5Cqhr?WT}0L
        init().then(response => {;
        });
        // Block#: }pZT$6^XT=WeSsZymh.{
        initialized().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BtnInit"]').on('click', on_BtnInit_click);
    // Block#: ]N}dt(DaffVov3RSGbAi
    function on_BtnRead_click(e) {
      try {
        // Block#: UKJ3-c_nBNT{+#I,`)yc
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Choice", (getUpper())); // Block#: %Va/.}.d}36.Vo,CH8;3
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Choice2", (getLower())); // Block#: Zhh7G1:BZPWUBo-L;.RX
        read().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BtnRead"]').on('click', on_BtnRead_click);
  };
  var testradiobuttons = new TestRadioButtons();
  // PROJECT CODE
  var _that = this;
  // Block#: J}XB=`w8`$,_sJih*U!i
  function on_Button_click(e) {
    try {
      // Block#: ,U.7L.heK!G%k{ACs5j0
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="MainScreen2"]');
      showScreen.show();
      history.pushState({
        'view': 'MainScreen2'
      }, 'MainScreen2', 'MainScreen2');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 650857-961954-668145-951243
