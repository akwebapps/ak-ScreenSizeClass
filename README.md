# akScreenSizeClass
Grab and assign bootstrap size classes to body tag for stylesheet shortcuts. Sometimes it sucks having to deal with `@media` classes in your stylesheet. Wouldn't it be easier to reference the size by a class instead?

## Breakpoints & Body Classes
| Min Width  | Max Width | Body Class  |
| ---------- |:---------:| -----------:|
| <          | 575       | `.body-xs`  |
| 576        | 767       | `.body-sm`  |
| 768        | 991       | `.body-md`  |
| 992        | 1199      | `.body-lg`  |
| 1200       | >         | `.body-xl`  |


## Get Values
```javascript
var currentClass = $.akScreenSizeClass("class"); //gets the current body class assignment
var currentWidth = $.akScreenSizeClass("width"); //gets the current window width
```

## Reinitialize Values
The width is set every time the window is resized but you MAY want to force it to reassign the body class.
```javascript
$.akScreenSizeClass("set");
```

## Listen for Changes
You can listen for changes. This even will be triggered every time the class is changed.
```javascript
$(document).on("sizeClassChanged",function(e,data){
   //do something with the data
   //returns {"width":currentScreenWidth,"class":currentBodyClass}
})
```
