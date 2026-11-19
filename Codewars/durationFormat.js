function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  if (seconds < 60) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
  } else if (seconds >= 60 && seconds < 3600) {
    let minutes = Math.floor(seconds / 60);
    let sec = seconds - minutes * 60;
    let minText = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    let secText = `${sec} ${sec === 1 ? "second" : "seconds"}`;

    return seconds % 60 === 0 ? minText : `${minText} and ${secText}`;
  } else if (seconds >= 3600 && seconds < 86400) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let sec = seconds - hours * 3600 - minutes * 60;

    let hourText = `${hours} ${hours === 1 ? "hour" : "hours"}`;
    let minText = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    let secText = `${sec} ${sec === 1 ? "second" : "seconds"}`;

    return seconds % 3600 === 0
      ? hourText
      : `${hourText} ${minText} and ${secText}`;
  } else {
    let days = Math.floor(seconds / 86400);
    let hour = Math.floor((seconds - days * 86400) / 3600);
    let minutes = Math.floor((seconds - days * 86400 - hour * 3600) / 60);
    let sec = seconds - days * 86400 - hour * 3600 - minutes * 60;

    let dayText = `${days} ${days === 1 ? "day" : "days"}`;
    let hourText = `${hour} ${hour === 1 ? "hour" : "hours"}`;
    let minText = `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    let secText = `${sec} ${sec === 1 ? "second" : "seconds"}`;

    return seconds % 86400 === 0
      ? dayText
      : `${dayText} ${hourText} ${minText} ${secText}`;
  }
}

console.log(formatDuration(1234567));