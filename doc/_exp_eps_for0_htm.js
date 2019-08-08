var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad.htm',
'theory.htm',
'introduction.htm',
'exp_eps.htm',
'exp_eps_for0.htm'
];
var list_current0 = [
'exp_eps_for0.htm#Mathematical Form',
'exp_eps_for0.htm#Operation Sequence',
'exp_eps_for0.htm#Operation Sequence.Variable',
'exp_eps_for0.htm#Operation Sequence.Parameter',
'exp_eps_for0.htm#Operation Sequence.Index',
'exp_eps_for0.htm#Operation Sequence.Code',
'exp_eps_for0.htm#Operation Sequence.Operation',
'exp_eps_for0.htm#Operation Sequence.Zero Order',
'exp_eps_for0.htm#Operation Sequence.Sweep',
'exp_eps_for0.htm#Return Value',
'exp_eps_for0.htm#Comparisons',
'exp_eps_for0.htm#Verification',
'exp_eps_for0.htm#Exercises'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down3(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down3[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}