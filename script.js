function dateAgo() {
    var date = document.getElementById("since").value;
    var startDate = new Date(date);
    var diffDate = new Date(new Date() - startDate);
    return ((diffDate.toISOString().slice(0, 4) - 1970) + "Anos " +
        diffDate.getMonth() + "Meses " + (diffDate.getDate()-1) + "Dias");
}




