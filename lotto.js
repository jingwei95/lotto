

var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox'),
    grid:{
		spacing: 20,
        length: 20,
        colour: '#ccc',
        snap: true
		},
	trashcan: true,
	zoom:{
		controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
		},
     }
	);


function YaLotto(){
		Blockly.JavaScript.addReservedWords('code');
		var code = Blockly.JavaScript.workspaceToCode(workspace);
		try {
			eval(code);
		} catch (e) {
		alert(e);
		}
}

/*function saveWorkspace(){
		var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
		var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
		//alert(xmlText);
		localStorage.setItem("blockly.xml", xmlText);
	
}

function restoreWorkspace(){
		var xmlText = localStorage.getItem("blockly.xml");
		if(xmlText){
			Blockly.mainWorkspace.clear();
			xmlDom = Blockly.Xml.textToDom(xmlText);
			Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,xmlDom);
		}
	
}*/
	
document.getElementById("run").addEventListener("click",YaLotto);
/*document.getElementById("save").addEventListener("click",saveWorkspace);
document.getElementById("restore").addEventListener("click",restoreWorkspace);
*/
var arr, i, result, j, position, num;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


arr = [];
for (i = 1; i <= 49; i++) {
  arr[(i - 1)] = i;
}
result = [];
for (j = 1; j <= 6; j++) {
  position = mathRandomInt(1, arr.length);
  num = arr.splice((arr - 1), 1)[0];
  result[(j - 1)] = num;
}
window.alert(result);