var ThirdParty = {

centerHorizontally: true,
centerVertically: true,
showRotateHint: true,
enableFullscreenToggle: true,

// Called when all assets have been loaded
loadingComplete: function()
{
	 //console.log('API: loadingComplete');
},

// Called when the main menu is showed
mainMenu: function() 
{
	//console.log('API: mainMenu');
},

gameHelp: function() 
{
	//console.log('API: gameHelp');
	//GameAnalytics.hit('GameHelp');
},

// Called when the game (first level) starts
gameStart: function() 
{
	//console.log('API: gameStart');
	//GameAnalytics.hit('GameStart');
},

// Called when a level is completed
levelComplete: function(level) 
{
	//console.log('API: levelComplete: ' + level);
	//GameAnalytics.hit('LevelComplete', level);
},

// Called when game over
gameOver: function() 
{
	//console.log('API: gameOver');
	//GameAnalytics.hit('GameOver');
},

// Called when game is restarted
restartGame: function() 
{
	//console.log('API: restartGame');
},

// Called when game is completed (all levels completed)
gameComplete: function() 
{
	//console.log('API: gameComplete');
	//GameAnalytics.hit('GameComplete');
},

showLeaderboard: function()
{
	//console.log('API: showLeaderboard');
	//GameHiscore.leaderBoard();
	h5api.getRank(function(obj){
		//console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
		if(obj.code == 10000){
			var html = [
				'<table border="0" width="100%"><tr><th>排名</th><th>积分</th></tr>'
			];
			//console.log("获取成功");
			var data = obj.data;
			for(var i= 0;i < data.length;i++){
				html.push("<tr><td>" + data[i].rank + "</td> <td>" + data[i].score +"</td> </tr>");
			}
			html.push('</table>');
			GameLib.showPopup("积分排行榜", html.join(''), 300, 320);
		} else{
			var html = [
				'<p>错误：' + obj.code + '</p>',
			];
			GameLib.showPopup("获取失败", html.join(''), 400, 120);
			//console.log("获取失败");
		}
	});
},

// Called when user is ready to submit a score.
submitScore: function(score, level) 
{
	h5api.submitScore(score,function(obj){
		//console.log("代码:" + obj.code + ",消息:" + obj.message + ",数据:" + obj.data);
		if(obj.code == 10000){
			var html = [
				'<p>你的积分是' + obj.data.score + '排名' + obj.data.rank + '</p>'
			];
			GameLib.showPopup("上传成功", html.join(''), 400, 120);
			//console.log("上传成功");
		} else {
			var html = [
				'<p>错误：' + obj.code + '</p>',
			];
			GameLib.showPopup("上传失败", html.join(''), 400, 120);
			//console.log("上传失败");
		}
	});
}
};
