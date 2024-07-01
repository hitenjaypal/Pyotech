def find_second_largest(arr):
    if len(arr) < 2:
        print("Array should have at least 2 elements")
        return -1
    
    max1 = arr[0]  # First maximum element
    max2 = float('-inf')  # Second maximum element, initialized to negative infinity
    
    for num in arr[1:]:
        if num > max1:
            max2 = max1
            max1 = num
        elif num > max2 and num != max1:
            max2 = num
    
    if max2 == float('-inf'):
        print("There is no second largest element")
        return -1
    else:
        return max2

# Example usage:

arr = [2, 5, 1, 3, 14, 6, 8, 30]
second_largest = find_second_largest(arr)
if second_largest != -1:
    print(second_largest)