# Create a vector
numbers <- c(5, 2, 8, 1, 9, 3)

# Sort in ascending order
sorted_asc <- sort(numbers)
print(sorted_asc)

# Sort in descending order
sorted_desc <- sort(numbers, decreasing = TRUE)
print(sorted_desc)

# Sort a data frame by column
df <- data.frame(name = c("Alice", "Bob", "Charlie"), age = c(25, 30, 28))
sorted_df <- df[order(df$age), ]
print(sorted_df)