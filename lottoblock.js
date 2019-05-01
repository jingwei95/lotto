Blockly.Blocks['lottoblock'] = {
  init: function() {
    this.appendValueInput("AAA")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("number"), "lotto");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

goog.provide('Blockly.JavaScript.speak');

Blockly.JavaScript['lottoblock'] = function(block) {
  var text_lotto = block.getFieldValue('lotto');
  var value_aaa = Blockly.JavaScript.valueToCode(block, 'AAA', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'speak('+ value_aaa + ');\n';
  // var code = 'speak2("zao an ");';
  return code;
};

function speak(src) {
	var i, node;
	var arr = src.split(",");
	var aDiv = document.getElementsByClassName("lotto");
	for(i=0;i<6;i++){
		node = document.createTextNode(arr[i]);
		aDiv[i].appendChild(node);
	}
	document.getElementById("speak").autoplay = true;
	document.getElementById("speak").src = "http://translate.google.com/translate_tts?ie=utf-8&tl=zh-tw&client=tw-ob&q=" + src;
}