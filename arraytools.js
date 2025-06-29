/**
 * arraytools - Basic Array Utility Functions
 * Author: AiutiDiGioco
 * License: Custom
 */

const arraytools = {
    /**
     * Shuffles the elements of an array randomly.
     * @param {any[]} arr - The array to shuffle.
     * @returns {any[]}
     */
    shuffle(arr) {
        if (!Array.isArray(arr)) {
            console.error('[arraytools] Invalid input. Expected an array.');
            return [];
        }
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    },

    /**
     * Removes all falsy values from an array.
     * @param {any[]} arr - The array to clean.
     * @returns {any[]}
     */
    clean(arr) {
        if (!Array.isArray(arr)) {
            console.error('[arraytools] Invalid input. Expected an array.');
            return [];
        }
        return arr.filter(Boolean);
    },

    /**
     * Finds the most frequent element in an array.
     * @param {any[]} arr - The array to process.
     * @returns {any}
     */
    mostFrequent(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            console.error('[arraytools] Invalid input. Expected a non-empty array.');
            return undefined;
        }
        const counts = {};
        let maxCount = 0;
        let result;
        arr.forEach(item => {
            counts[item] = (counts[item] || 0) + 1;
            if (counts[item] > maxCount) {
                maxCount = counts[item];
                result = item;
            }
        });
        return result;
    }
};

// Example usage:
// console.log(arraytools.shuffle([1, 2, 3, 4, 5]));
// console.log(arraytools.clean([0, 1, false, 2, '', 3, null]));
// console.log(arraytools.mostFrequent([1, 2, 2, 3, 3, 3, 2]));

module.exports = arraytools;
