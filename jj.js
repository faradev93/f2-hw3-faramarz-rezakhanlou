function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimesBetween() {
    const start = parseInt(prompt("عدد اول را وارد کنید:"));
    const end = parseInt(prompt("عدد دوم را وارد کنید:"));
    const primes = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    if (primes.length > 0) {
        alert(`اعداد اول بین ${start} و ${end} عبارتند از: ${primes.join(", ")}`);
    } else {
        alert(`هیچ عدد اولی بین ${start} و ${end} وجود ندارد.`);
    }
}

// برای اجرا کردن تابع
findPrimesBetween();
