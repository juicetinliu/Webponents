function setupHTML(){
  main = new Main();
  let mainHGroup = new HorzGroup(main);
  
  let canvPanel = new Panel(mainHGroup);
  let canv = new Canvas(canvPanel);
  
  let panel = new Panel(mainHGroup, ['out', 'round', 'fill']);
  let vgroup = new VertGroup(panel);
  
  let titleHGroup = new HorzGroup(vgroup);
  let titlePanel = new Panel(titleHGroup, ['in', 'round', 'fill']);
  
  let titleVGroup = new VertGroup(titlePanel, 4);
  let titleCenter = new HorzGroup(titleVGroup, 2);
  let tex = new Text(titleCenter, "Control Panel");
  
  let title = new Text(titleVGroup, "A little test of stuff");
  
  let texhgroup = new HorzGroup(titleVGroup);
  let texpanel = new Panel(texhgroup, ['out' ,'round']);
  let tex1 = new Text(texpanel, "left no fill");
  let texpanel2 = new Panel(texhgroup, ['out' ,'round', 'fill']);
  let tex2 = new Text(texpanel2, "right fill");
  
  let topGroup = new HorzGroup(vgroup);
  let panel1 = new Panel(topGroup, ['out' ,'round', 'fill']);
  let panel2 = new Panel(topGroup, ['out' ,'round', 'fill'], 0, 100);
  //let panel3 = new Panel(topGroup, ['out' ,'round', 'fill'], 0, 75);
  slider = new Slider(topGroup);
  let panel4 = new Panel(topGroup, ['out' ,'round', 'fill']);
  
  let midGroup = new HorzGroup(vgroup);
  let subtitlePanell = new Panel(midGroup, ['out', 'round', 'fill']);
  let subtitlePanel = new Panel(midGroup, ['out']);
  let subtitlePanelr = new Panel(midGroup, ['out', 'round', 'fill']);
  let subtitleGroup = new HorzGroup(subtitlePanel);
  let subtitleText = new Text(subtitleGroup, "XD");
  
  let midBGroup = new HorzGroup(vgroup);
  let buttonTPanel = new Panel(midBGroup, ['out', 'round', 'fill']);
  let alignBTitle = new HorzGroup(buttonTPanel);
  let buttonTitle = new Text(alignBTitle, "Buttons below!");
  
  let bottomGroup = new HorzGroup(vgroup);
  //let bottomVGroup = new VertGroup(bottomGroup);
  //let buttonHGroup = new HorzGroup(bottomVGroup);
  let buttonPanel = new Panel(bottomGroup, ['in', 'round', 'fill']);
  let buttonGroup = new HorzGroup(buttonPanel, 4);
  let button1 = new Button(buttonGroup, ['#FFFFFF', '#555555'], drawball, 'https://raw.githubusercontent.com/google/material-design-icons/master/png/action/arrow_circle_up/materialiconsround/48dp/2x/round_arrow_circle_up_black_48dp.png', 'Add circle');
  
  let button2 = new Button(buttonGroup, ['#FF9999', '#FF0000'], clearcanvas, 'https://raw.githubusercontent.com/google/material-design-icons/master/png/content/clear/materialiconsround/48dp/2x/round_clear_black_48dp.png', 'Clear');

  let button3 = new Button(buttonGroup, [], printHTML, '', 'idk');
    
  let buttonText = new Text(button3, "Hmm");
  
  let consoleHGroup = new HorzGroup(vgroup);
  let consolePanel = new Panel(consoleHGroup, ['out', 'round', 'fill']);
  consoleText = new Text(consolePanel, "hmm?");
  
  main.createHTML();
}

function drawball(){
  fill(255);
  ellipse(250,250,100);
  consoleText.changeText('Drew a circle!');
}

function clearcanvas(){
  background(0);
  consoleText.changeText('Cleared!');
}

function printHTML(){
  print(main);
  consoleText.changeText('Check console!');
}


//function changeBar(){
//  print(mouseY, slider.HTML.position().y);
//  //let newPos = -slider.HTML.position().y;
//  //slider.sliderBar.style('margin-bottom: ' + newPos + 'px');
//}
