window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"855H5UBA2T5FMG24KDPZGBMGS&contentType=json", //Sign up for your personal key
       location:"DHAKA, BANGLADESH", //Enter an address
       unitGroup:"metric", //"us" or "metric"
       forecastDays:5, //how many days forecast to show
       title:"dhaka,BD", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();