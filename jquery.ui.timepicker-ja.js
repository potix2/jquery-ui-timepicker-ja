/**
 * This is a japanese resource file for jQuery UI Timepicker plugin.
 *
 * Author: Katsunori Kanda <potix2@gmail.com>
 * github: https://github.com/potix2/jquery-ui-timepicker-ja
 *
 *
 * jQuery UI Timepicker:
 *
 * Author: Francois Gelinas.
 * Website: http://fgelinas.com/code/timepicker/
 * github: https://github.com/fgelinas/timepicker
 */
jQuery(function($){
  $.timepicker.regional['ja'] = {
    hourText: '時', // Display text for hours section
    minuteText: '分', // Display text for minutes link
    amPmText: ['AM', 'PM'] // Display text for AM PM
  };
  $.timepicker.setDefaults($.timepicker.regional['ja']);
});
