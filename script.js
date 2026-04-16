var DATA = {"1": [{"q": "Which of the following is a supervised learning problem?", "opts": ["Grouping people in a social network.", "Predicting credit approval based on historical data", "Predicting rainfall based on historical data", "all of the above"], "ans": [1, 2]}, {"q": "Which of the following are classification problems? (multiple options may be correct)", "opts": ["Predicting the temperature (in Celsius) of a room from other environmental features (such as atmospheric pressure, humidity etc).", "Predicting if a cricket player is a batsman or bowler given his playing records.", "Predicting if a particular route between two points has traffic jam or not based on the travel time of vehicles.", "Filtering of spam messages"], "ans": [1, 2, 3]}, {"q": "Which of the following is a regression task? (multiple options may be correct)", "opts": ["Predicting the monthly sales of a cloth store in rupees.", "Predicting if a user would like to listen to a newly released song or not based on historical data.", "Predicting the confirmation probability (in fraction) of your train ticket whose current status is waiting list based on historical data.", "Predicting if a patient has diabetes or not based on historical medical records.", "Predicting the gender of a human based on facial features."], "ans": [0, 2]}, {"q": "Which of the following is an unsupervised task?", "opts": ["Learning to play chess.", "Predicting if a new edible item is sweet or spicy based on the information of the ingredients, their quantities, and labels (sweet or spicy) for many other similar dishes.", "Grouping related documents from an unannotated corpus.", "all of the above"], "ans": [2]}, {"q": "Which of the following is a categorical feature?", "opts": ["Number of legs of an animal", "Number of hours you study in a day", "Your weekly expenditure in rupees.", "Branch of an engineering student", "Ethnicity of a person", "Height of a person in inches"], "ans": [3, 4]}, {"q": "Let X and Y be a uniformly distributed random variable over the interval [0, 4] and [0, 6] respectively. If X and Y are independent events, then compute the probability, P P (max (X, Y ) > 2 )", "opts": ["1/6", "5/6", "2/3", "None of the above"], "ans": [1]}, {"q": "Let the trace and determinant of a matrix A = [ a c b d ] [ a b c d ] be 4 and 3 respectively. The eigenvalues of A are", "opts": ["3 + \u03b9 7 \u2013 \u221a 2 , 3 \u2212 \u03b9 7 \u2013 \u221a 2 3 + \u03b9 7 2 , 3 \u2212 \u03b9 7 2 where \u03b9 = \u2212 1 \u2212 \u2212 \u2212 \u221a \u03b9 = \u2212 1", "1,3", "None of the above", "Can be computed only if A is a symmetric matrix.", "Can not be computed as the entries of the matrix A are not given."], "ans": [1]}, {"q": "What happens when your model complexity increases? (multiple options may be correct)", "opts": ["Model Bias decreases", "Model Bias increases", "Variance of the model decreases", "Variance of the model increases"], "ans": [0, 3]}, {"q": "Based on a survey, it was found that the probability that a student likes to play football was 0.25 and the probability that a student likes to play cricket is 0.43. It was also found that the probability that a student likes to play both football and cricket is 0.12. What is the probability that a student does not like to play either?", "opts": ["0.32", "0.2", "0.44", "0.56"], "ans": [2]}, {"q": "Which of the following are true about bias and variance of overfitted and underfitted models? (multiple options may be correct)", "opts": ["Underfitted models have high bias.", "Underfitted models have low bias.", "Overfitted models have low variance.", "Overfitted models have high variance.", "none of these"], "ans": [0, 3]}], "2": [{"q": "In building a linear regression model for a particular data set, you observe the coefficient of one of the features having a relatively high negative value. This suggests that", "opts": ["This feature has a strong effect on the model (should be retained)", "This feature does not have a strong effect on the model (should be ignored)", "It is not possible to comment on the importance of this feature without additional information"], "ans": [2]}, {"q": "We have seen methods like ridge and lasso to reduce variance among the co-efficients. We can use these methods to do feature selection also. Which one of them is more appropriate?", "opts": ["Ridge", "Lasso"], "ans": [1]}, {"q": "Given a set of n data points, (x 1 , y 1 ), (x 2 , y 2 ), . . . , (x n , y n ) , the best least squares fit f (x) is obtained by minimization of:", "opts": ["\u03a3 n i = 1 [ y i \u2212 f ( x i ) ] \u03a3 i = 1 n [ y i \u2212 f ( x i ) ]", "min ( y i \u2212 f ( x i ) ) min ( y i \u2212 f ( x i ) )", "\u03a3 n i = 1 [ y i \u2212 f ( x i ) ] 2 \u03a3 i = 1 n [ y i \u2212 f ( x i ) ] 2", "max ( y i \u2212 f ( x i ) ) max ( y i \u2212 f ( x i ) )"], "ans": [2]}, {"q": "During linear regression, with regards to residuals, which among the following is true?", "opts": ["Lower is better", "Higher is better", "Depends upon the data", "None of the above"], "ans": [0]}, {"q": "In the lecture on Multivariate Regression, you learn about using orthogonalization iteratively to obtain regression co-effecients. This method is generally referred to as Multiple Regression using Successive Orthogonalization In the formulation of the method, we observe that in iteration k , we regress the entire dataset on z 0 , z 1 , . . . z k\u22121 . It seems like a waste of computation to recompute the coefficients for z 0 a total of p times, z 1 a total of p \u2212 1 times and so on. Can we reuse the coefficients computed in iteration j for iteration j + 1 for z j\u22121 ?", "opts": ["No. Doing so will result in the wrong \u03b3 \u03b3 matrix. and hence, the wrong \u03b2 i \u03b2 i \u2019s.", "Yes. Since z j \u2212 1 z j \u2212 1 is orthogonal to z j \u2212 l \u2200 l \u2264 j 1 z j \u2212 l \u2200 l \u2264 j 1 , the multiple regression in each iteration is essentially a univariate regression on each of the previous residuals. Since the regression coefficients for the previous residuals don\u2019t change over iterations, we can reuse the coefficients for further iterations."], "ans": [1]}, {"q": "You decide to reduce the dimensionality of your data (N \u00d7 p) using Best Subset Selection. The library you\u2019re using has a function regress (X, Y ) that takes in X and Y and regresses Y on X . What is the expected number of times regress(\u00b7, \u00b7) will be called during your dimensionality reduction?", "opts": ["O ( 2^N )", "O ( 2^p )", "O ( N^p )", "O ( p^2 )"], "ans": [1]}, {"q": "If the number of features is larger than the number of training data points, to identify a suitable subset of the features for use with linear regression, we would prefer", "opts": ["Forward stepwise selection", "Backward stepwise selection"], "ans": [0]}, {"q": "Assume you have a five-dimensional input data for a three-class classification problem. Further assume that all five dimensions of the input are independent to each other. In this scenario, is it possible for linear regression using lasso to result in one or more coefficients to become zero?", "opts": ["Yes", "No"], "ans": [0]}, {"q": "You are given the following five three-dimensional training data instances (along with one- dimensional output) \u2022 x 1 = 5, x 2 = 7, x 3 = 3, y = 4 \u2022 x 1 = 2, x 2 = 4, x 3 = 9, y = 8 \u2022 x 1 = 3, x 2 = 8, x 3 = 1, y = 2 \u2022 x 1 = 7, x 2 = 7, x 3 = 2, y = 3 \u2022 x 1 = 1, x 2 = 9, x 3 = 7, y = 8 Using the K -nearest neighbour technique for performing regression, what will be the predicted y value corresponding to the query point ( x 1 = 5, x 2 = 3, x 3 = 4), for K = 2?", "opts": ["3", "2.5", "3.5", "2"], "ans": [2]}, {"q": "For the dataset given in the previous question, what will be the predicted y value corresponding to the query point ( x 1 = 5, x 2 = 3, x 3 = 4), for K = 3?", "opts": ["4.66", "5", "3", "3.5"], "ans": [1]}], "3": [{"q": "Which of the following is true about a logistic regression based classifier?", "opts": ["The logistic function is non-linear in the weights", "The logistic function is linear in the weights", "The decision boundary is linear in the weights", "The decision boundary is non-linear in the weights"], "ans": [0, 2]}, {"q": "For a binary classification problem, the decision boundary resulting from the use of logistic regression is", "opts": ["linear", "sigmoid", "parabolic", "exponential"], "ans": [0]}, {"q": "Consider the case where two classes follow Gaussian distribution which are centered at (\u22121, 2) and (1, 4) and have identity covariance matrix. Which of the following is the separating decision boundary using LDA?", "opts": ["y \u2212 x = 3", "x + y = 3", "x + y = 6", "(b) and (c) are possible", "None of these", "Can not be found from the given information"], "ans": [1]}, {"q": "Consider the following relation between a dependent variable and an independent variable identified by doing simple linear regression. Which among the following relations between the two variables does the graph indicate?", "opts": ["as the independent variable increases, so does the dependent variable", "as the independent variable increases, the dependent variable decreases", "if an increase in the value of the dependent variable is observed, then the independent variable will show a corresponding increase", "if an increase in the value of the dependent variable is observed, then the independent variable will show a corresponding decrease", "the dependent variable in this graph does not actually depend on the independent variable", "none of the above"], "ans": [4]}, {"q": "Given the following distribution of data points: What method would you choose to perform Dimensionality Reduction?", "opts": ["Linear Discriminant Analysis", "Principal Component Analysis"], "ans": [0]}, {"q": "In general, which of the following classification methods is the most resistant to gross outliers?", "opts": ["Quadratic Discriminant Analysis (QDA)", "Linear Regression", "Logistic regression", "Linear Discriminant Analysis (LDA)"], "ans": [2]}, {"q": "Suppose that we have two variables, X X and Y Y (the dependent variable). We wish to find the relation between them. An expert tells us that relation between the two has the form Y = m X 2 + c Y = m X 2 + c . Available to us are samples of the variables X X and Y Y . Is it possible to apply linear regression to this data to estimate the values of m and c c ?", "opts": ["no", "yes", "insufficient information"], "ans": [1]}, {"q": "In a binary classification scenario where x x is the independent variable and y y is the dependent variable, logistic regression assumes that the conditional distribution y | x y | x follows a", "opts": ["Bernoulli distribution", "binomial distribution", "normal distribution", "exponential distribution"], "ans": [0]}, {"q": "Consider the following data: Assuming that you apply LDA to this data, what is the estimated covariance matrix?", "opts": ["[ 1.875 0.3125 0.3125 0.9375 ] [ 1.875 0.3125 0.3125 0.9375 ]", "[ 2.5 0.4167 0.4167 1.25 ] [ 2.5 0.4167 0.4167 1.25 ]", "[ 1.875 0.3125 0.3125 1.2188 ] [ 1.875 0.3125 0.3125 1.2188 ]", "[ 2.5 0.4167 0.4167 1.625 ] [ 2.5 0.4167 0.4167 1.625 ]", "None of these"], "ans": [3]}], "4": [{"q": "Consider the data set given below. Can we use perceptron learning algorithm to build a model using only the given features that achieves zero misclassification error on the training data?", "opts": ["Yes", "No", "Depends on the initial weights"], "ans": [1]}, {"q": "Suppose we use a linear kernel SVM to build a classifier for a 2-class problem where the training data points are linearly separable. In general, will the classifier trained in this manner be always the same as the classifier trained using the perceptron training algorithm on the same training data?", "opts": ["Yes", "No"], "ans": [1]}, {"q": "Train a linear regression model (without regularization) on the above dataset. Report the coefficients of the best fit model. Report the coefficients in the following format: \u03b2 0 , \u03b2 1 , \u03b2 2 , \u03b2 3 \u03b2 0 , \u03b2 1 , \u03b2 2 , \u03b2 3 . (You can round-off the accuracy value to the nearest 2-decimal point number.)", "opts": ["-1.2, 2.1, 2.2, 1", "1, 1.2, 2.1, 2.2", "-1, 1.2, 2.1, 2.2", "1, -1.2, 2.1, 2.2", "1, 1.2, -2.1, -2.2"], "ans": [1, 2]}, {"q": "Train an l2 regularized linear regression model on the above dataset. Vary the regularization parameter from 1 to 10. As you increase the regularization parameter, absolute value of the coefficients (excluding the intercept) of the model:", "opts": ["increase", "first increase then decrease", "decrease", "first decrease then increase", "does not change"], "ans": [2]}, {"q": "Train an l 2 l 2 regularized logistic regression classifier on the modified iris dataset. We recommend using sklearn. Use only the first three features for your model. We encourage you to explore the impact of varying different hyperparameters of the model. Kindly note that the C parameter mentioned below is the inverse of the regularization parameter \u03bb \u03bb . As part of the assignment train a model with the following hyperparameters: Model: logistic regression with one-vs-rest classifier, C = 1 e 4 C = 1 e 4 For the above set of hyperparameters, report the best classification accuracy", "opts": ["0.88", "0.86", "0.98", "0.68"], "ans": [2]}, {"q": "Train an SVM classifier on the modified iris dataset. We recommend using sklearn. Use only the first three features for your model. We encourage you to explore the impact of varying different hyperparameters of the model. Specifically try different kernels and the associated hyperparameters. As part of the assignment train models with the following set of hyperparameters RBF-kernel, g a m m a g a m m a = 0.5, one-vs-rest classifier, no-feature-normalization Try C = 0.01 , 1 , 10 C = 0.01 , 1 , 10 . For the above set of hyperparameters, report the best classification accuracy along with total number of support vectors on the test data.", "opts": ["0.92, 69", "0.88, 40", "0.88, 69", "0.98, 41"], "ans": [3]}], "5": [{"q": "For training a binary classification model with three independent variables, you choose to use neural networks. You apply one hidden layer with three neurons. What are the number of parameters to be estimated? (Consider the bias term as a parameter)", "opts": ["16", "21", "3 4 = 81", "4 3 = 81", "12", "4", "None of these"], "ans": [0]}, {"q": "Suppose the marks obtained by randomly sampled students follow a normal distribution with unknown \u03bc \u03bc . A random sample of 5 marks are 30, 50, 69, 2 and 99. Using the given samples find the maximum likelihood estimate for the mean.", "opts": ["54.2", "67.75", "50", "Information not sufficient for estimation"], "ans": [2]}, {"q": "You are given the following neural networks which take two binary valued inputs x 1 , x 2 \u2208 { 0 , 1 } x 1 , x 2 \u2208 { 0 , 1 } and the activation function is the threshold function ( h ( x ) = 1 ( h ( x ) = 1 if x > 0 ; 0 x > 0 ; 0 otherwise). Which of the following logical functions does it compute?", "opts": ["OR", "AND", "NAND", "None of the above."], "ans": [0]}, {"q": "Using the notations used in class, evaluate the value of the neural network with a 3-3-1 architecture (2-dimensional input with 1 node for the bias term in both the layers). The parameters are as follows \u03b1 = [ 1 \u2212 1 0.2 0.8 0.4 0.5 ] \u03b1 = [ 1 0.2 0.4 \u2212 1 0.8 0.5 ] \u03b2 = [ 0.3 0.4 0.5 ] \u03b2 = [ 0.3 0.4 0.5 ] Using sigmoid function as the activation functions at both the layers, the output of the network for an input of (0.8, 0.7) will be", "opts": ["0.6710", "0.9617", "0.6948", "0.7052", "None of these"], "ans": [3]}, {"q": "Which of the following statements is false:", "opts": ["The chances of overfitting decrease with Increasing the number of hidden nodes and increasing the number of hidden layers.", "A neural network with one hidden layer can represent any Boolean function given sufficient number of hidden units and appropriate activation functions.", "Two hidden layer neural networks can represent any continuous functions (within a tolerance) as long as the number of hidden units is sufficient and appropriate activation functions used."], "ans": [0]}, {"q": "Consider the function f 1 ( x ) = e \u03b1 0 + \u03b1 x 1 + e \u03b1 0 + \u03b1 x f 1 ( x ) = e \u03b1 0 + \u03b1 x 1 + e \u03b1 0 + \u03b1 x and f 2 ( x ) = e \u03b2 0 + \u03b2 x 1 + e \u03b2 0 + \u03b2 x f 2 ( x ) = e \u03b2 0 + \u03b2 x 1 + e \u03b2 0 + \u03b2 x shown in the figure below: Which of the following is correct?", "opts": ["0 < \u03b2 < \u03b1 0 < \u03b2 < \u03b1", "0 < \u03b1 < \u03b2 0 < \u03b1 < \u03b2", "\u03b1 < \u03b2 < 0 \u03b1 < \u03b2 < 0", "\u03b2 < \u03b1 < 0 \u03b2 < \u03b1 < 0"], "ans": [2]}, {"q": "We have a function which takes a two-dimensional input x = ( x 1 , x 2 ) x = ( x 1 , x 2 ) and has two parameters w = ( w 1 , w 2 ) w = ( w 1 , w 2 ) given by f ( x , w ) = \u03c3 ( \u03c3 ( x 1 w 1 ) w 2 + x 2 ) f ( x , w ) = \u03c3 ( \u03c3 ( x 1 w 1 ) w 2 + x 2 ) where \u03c3 ( x ) = 1 1 + e \u2212 x \u03c3 ( x ) = 1 1 + e \u2212 x . We use backpropagation to estimate the right parameter values. We start by setting both the parameters to 0. Assume that we are given a training point x 2 = 1 , x 1 = 0 , y = 5 x 2 = 1 , x 1 = 0 , y = 5 . Given this information \u2202 f \u2202 w 2 \u2202 f \u2202 w 2 ?", "opts": ["0.150", "-0.25", "0.125", "0.098", "None of these"], "ans": [3]}, {"q": "If the learning rate is 0.5, what will be the value of w 2 after one update using backpropagation algorithm?", "opts": ["0.4197", "-0.4197", "0.5625", "- 0.5625"], "ans": [0]}, {"q": "Which of the following are true when comparing ANNs and SVMs?", "opts": ["ANN error surface has multiple local minima while SVM error surface has only one minima", "After training, an ANN might land on a different minimum each time, when initialized with random weights during each run.", "As shown for Perceptron, there are some classes of functions that cannot be learnt by an ANN. An SVM can learn a hyperplane for any kind of distribution.", "In training, ANN\u2019s error surface is navigated using a gradient descent technique while SVM\u2019s error surface is navigated using convex optimization solvers."], "ans": [0, 1, 3]}], "6": [{"q": "What is specified at any non-leaf node in a decision tree?", "opts": ["Class of instance", "Data value description", "Test specification", "Data process description"], "ans": [2]}, {"q": "Suppose we use the decision tree model for solving a multi-class classification problem. As we continue building the tree, w.r.t. the generalisation error of the model,", "opts": ["the error due to bias increases", "the error due to bias decreases", "the error due to variance increases", "the error due to variance decreases"], "ans": [1, 2]}, {"q": "Having built a decision tree, we are using reduced error pruning to reduce the size of the tree. We select a node to collapse. For this particular node, on the left branch, there are 3 training data points with the following outputs: 5, 7, 9.6 and for the right branch, there are four training data points with the following outputs: 8.7, 9.8, 10.5, 11. The original responses for data points along the two branches (left right respectively) were response_left and, response_right and the new response after collapsing the node is response_new . What are the values for response_left , response_right and response_new (numbers in the option are given in the same order)?", "opts": ["21.6, 40, 61.6", "7.2; 10; 8.8", "3, 4, 7", "depends on the tree height."], "ans": [1]}, {"q": "Which of these classifiers do not require any additional modifications to their original descriptions (as seen in the lectures) to use them when we have more than 2 classes? (multiple options may be correct)", "opts": ["decision trees", "logistic regression", "support vector machines", "k nearest neighbors"], "ans": [0, 3]}, {"q": "Consider the following data set. Considering \u2019profitable\u2019 as the binary valued attribute we are trying to predict, which of the attributes would you select as the root in a decision tree with multi-way splits using the cross-entropy impurity measure?", "opts": ["price", "maintenance", "capacity", "airbag"], "ans": [1]}, {"q": "In the above data set, what is the value of cross entropy when we consider capacity as the attribute to split on (multi-way splits)? (You can round-off the cross entropy value to the nearest 4-decimal place number)", "opts": ["0.7973", "0.8684", "0.8382", "0.7688"], "ans": [2]}, {"q": "An important factor that influences the variance of decision trees is the average height of the tree. For the same dataset, if we limited the height of the trees to some H, how would the variance of the decision tree algorithm be affected?", "opts": ["Variance may increase with tree length H .", "Variance may decrease with tree length H .", "Variance is unaffected by tree length H ."], "ans": [0]}, {"q": "In which of the following situations is it appropriate to introduce a new category \u2019Missing\u2019 for missing values? (multiple options may be correct)", "opts": ["When values are missing because the 108 emergency operator is sometimes attending a very urgent distress call.", "When values are missing because the attendant spilled coffee on the papers from which the data was extracted.", "When values are missing because the warehouse storing the paper records went up in flames and burnt parts of it.", "When values are missing because the nurse/doctor finds the patient\u2019s situation too urgent."], "ans": [0, 3]}], "7": [{"q": "For the given confusion matrix, compute the recall", "opts": ["0.73", "0.7", "0.6", "0.67", "0.78", "None of the above"], "ans": [2]}, {"q": "Pallavi is working on developing a binary classifier which has a huge class imbalance. Which of the following metric should she optimize the classifier over to develop a good model?", "opts": ["Accuracy", "Precision", "Recall", "F-Score"], "ans": [3]}, {"q": "While designing an experiment, which of these aspects should be considered?", "opts": ["Floor/Ceiling Effects", "Order Effects", "Sampling Bias"], "ans": [0, 1, 2]}, {"q": "Which of the following are true? TP - True Positive, TN - True Negative, FP - False Positive, FN - False Negative", "opts": ["Precision = T P T P + F P T P T P + F P", "Recall = T P T P + F N T P T P + F N", "Accuracy = 2 ( T P + T N ) T P + T N + F P + F N 2 ( T P + T N ) T P + T N + F P + F N", "Recall = F P T P + F P F P T P + F P"], "ans": [0, 1]}, {"q": "In the ROC plot, what are the quantities along y y and x x axes respectively?", "opts": ["Precision, Recall", "Recall, Precision,", "True Positive Rate, False Positive Rate", "False Positive Rate, True Positive Rate", "Specificity, Sensitivity", "True Positive, True Negative", "True Negative, True Positive"], "ans": [2]}, {"q": "How does bagging help in improving the classification performance?", "opts": ["If the parameters of the resultant classifiers are fully uncorrelated (independent), then bagging is inefficient.", "It helps reduce variance", "If the parameters of the resultant classifiers are fully correlated, then bagging is inefficient.", "It helps reduce bias"], "ans": [1, 2]}, {"q": "Which method among bagging and stacking should be chosen in case of limited training data? and What is the appropriate reason for your preference?", "opts": ["Bagging, because we can combine as many classifier as we want by training each on a different sample of the training data", "Bagging, because we use the same classification algorithms on all samples of the training data", "Stacking, because we can use different classification algorithms on the training data", "Stacking, because each classifier is trained on all of the available data"], "ans": [3]}, {"q": "Which of the following statements are TRUE when comparing Committee Machines and Stacking", "opts": ["Committee Machines are, in general, special cases of 2-layer stacking where the second- layer classifier provides uniform weightage.", "Both Committee Machines and Stacking have similar mechanisms, but Stacking uses different classifiers while Committee Machines use similar classifiers.", "Committee Machines are more powerful than Stacking", "Committee Machines are less powerful than Stacking"], "ans": [0, 3]}], "8": [{"q": "How does bagging help in designing better classifiers?", "opts": ["If the parameters of the resultant classifiers are fully uncorrelated (independent), then bagging is inefficient.", "It helps reduce bias", "If the parameters of the resultant classifiers are fully correlated, then bagging is inefficient.", "It helps reduce variance"], "ans": [2, 3]}, {"q": "In a random forest model let m < < p m << p be the number of randomly selected features that are used to identify the best split at any node of a tree. Which of the following are true? ( p p is the original number of features) (Multiple options may be correct)", "opts": ["increasing m m reduces the correlation between any two trees in the forest", "decreasing m m reduces the correlation between any two trees in the forest", "increasing m m increases the performance of individual trees in the forest", "decreasing m m increases the performance of individual trees in the forest"], "ans": [1, 2]}, {"q": "Which of the following properties is false in the case of a Bayesian Network?", "opts": ["The edges are directed", "Contains cycles", "Represents conditional independence relations among random variables", "All of the above"], "ans": [1]}, {"q": "A and B are Boolean random variables. Given: P ( A = T r u e ) = 0.3 , P ( A = F a l s e ) = 0.7 , P ( B = T r u e | A = T r u e ) = 0.4 , P ( B = F a l s e | A = T r u e ) = 0.6 , P ( A = T r u e ) = 0.3 , P ( A = F a l s e ) = 0.7 , P ( B = T r u e | A = T r u e ) = 0.4 , P ( B = F a l s e | A = T r u e ) = 0.6 , P ( B = T r u e | A = F a l s e ) = 0.6 , P ( B = F a l s e | A = F a l s e ) = 0.4 P ( B = T r u e | A = F a l s e ) = 0.6 , P ( B = F a l s e | A = F a l s e ) = 0.4 . Calculate P ( A = F a l s e | B = F a l s e ) P ( A = F a l s e | B = F a l s e ) by Bayes rule.", "opts": ["0.497", "0.391", "0.609", "0.503", "None of the above"], "ans": [2]}, {"q": "Can the boosting technique be applied to regression problems? Can bagging be applied to regression problems?", "opts": ["no, no", "no, yes", "yes, no", "yes, yes"], "ans": [3]}, {"q": "In boosting, the weights of data points that were miscalssified in the previous step, are:", "opts": ["increased as training progresses", "decreased as training progresses", "made zero as training progresses", "kept unchanged as training progresses"], "ans": [0]}, {"q": "Which of the following statements are true about ensemble classifiers? (multiple options may be correct)", "opts": ["The different learners in boosting based ensembles can be trained in parallel", "The different learners in bagging based ensembles can be trained in parallel", "Boosting based algorithms which iteratively re-weight training points, such as AdaBoost, are more sensitive to noise than bagging based methods.", "Boosting methods generally use strong learners as individual classifiers", "Boosting methods generally use weak learners as individual classifiers.", "An individual classifier in a boosting based ensemble is trained with every point in the training set."], "ans": [1, 2, 4, 5]}, {"q": "Consider the following graphical model, which of the following are false about the model? (multiple options may be correct)", "opts": ["A is independent of B when C is known", "D is independent of A when C is known", "D is not independent of A when B is known", "D is not independent of A when C is known"], "ans": [0, 1]}, {"q": "Consider the Bayesian network given in the previous question. Let \u2018A\u2019, \u2018B\u2019, \u2018C\u2019, \u2018D\u2019and \u2018E\u2019denote the random variables shown in the network. Which of the following can be inferred from the network structure?", "opts": ["\u2018A\u2019causes \u2018D\u2019", "\u2018E\u2019causes \u2018D\u2019", "\u2018C\u2019causes \u2018A\u2019", "options (a) and (b) are correct", "none of the above can be inferred"], "ans": [4]}], "9": [{"q": "Consider the bayesian network shown below. Two students - Manish and Trisha make the following claims: \u2022 Manish claims P ( D | { S , L , C } ) = P ( D | { L , C } ) P ( D | { S , L , C } ) = P ( D | { L , C } ) \u2022 Trisha claims P ( D | { S , L } ) = P ( D | L ) P ( D | { S , L } ) = P ( D | L ) where P ( X | Y ) P ( X | Y ) denotes probability of event X X given Y Y . Please note that Y Y can be a set. Which of the following is true?", "opts": ["Manish and Trisha are correct.", "Manish is correct and Trisha is incorrect.", "Manish is incorrect and Trisha is correct.", "Both are incorrect.", "Insufficient information to make any conclusion. Probability distributions of each variable should be given."], "ans": [1]}, {"q": "Consider the same bayesian network shown in previous question (Figure 1). Two other students in the class - Trina and Manish make the following claims: \u2022 Trina claims P ( S | { G , C } ) = P ( S | C ) P ( S | { G , C } ) = P ( S | C ) \u2022 Manish claims P ( L | { D , G } ) = P ( L | G ) P ( L | { D , G } ) = P ( L | G ) Which of the following is true?", "opts": ["Both the students are correct.", "Trina is incorrect and Manish is correct.", "Trina is correct and Manish is incorrect.", "Both the students are incorrect.", "Insufficient information to make any conclusion. Probability distributions of each variable should be given."], "ans": [0]}, {"q": "Consider the Bayesian graph shown below in Figure 2. The random variables have the following notation: d - Difficulty, i - Intelligence, g - Grade, s - SAT, l - Letter. The random variables are modeled as discrete variables and the corresponding CPDs are as below. What is the probability of P ( i = 1 , d = 0 , g = 2 , s = 1 , l = 1 ) P ( i = 1 , d = 0 , g = 2 , s = 1 , l = 1 ) ?", "opts": ["0.004608", "0.006144", "0.001536", "0.003992", "0.009216", "0.007309", "None of these"], "ans": [4]}, {"q": "Using the data given in the previous question, compute the probability of following assignment, P ( i = 1 , g = 1 , s = 1 , l = 0 ) P ( i = 1 , g = 1 , s = 1 , l = 0 ) irrespective of the difficulty of the course? (up to 3 decimal places)", "opts": ["0.160", "0.371", "0.662", "0.047", "0.037", "0.066", "0.189"], "ans": [3]}, {"q": "Consider the Bayesian network shown below in Figure 3 Two students - Manish and Trisha make the following claims: \u2022 Manish claims P ( H | { S , G , J } ) = P ( H | { G , J } ) P ( H | { S , G , J } ) = P ( H | { G , J } ) \u2022 Trisha claims P ( H | { S , C , J } ) = P ( H | { C , J } ) P ( H | { S , C , J } ) = P ( H | { C , J } ) Which of the following is true?", "opts": ["Manish and Trisha are correct.", "Both are incorrect.", "Manish is incorrect and Trisha is correct.", "Manish is correct and Trisha is incorrect.", "Insufficient information to make any conclusion. Probability distributions of each variable should be given."], "ans": [3]}, {"q": "Consider the Markov network shown below in Figure 4 Which of the following variables are NOT in the markov blanket of variable \u201c3\u201d shown in the above Figure 4 ? (multiple answers may be correct)", "opts": ["1", "8", "2", "5", "6", "4", "7"], "ans": [1, 2, 3, 6]}, {"q": "In the Markov network given in Figure 4, two students make the following claims: \u2022 Manish claims variable \u201c1\u201d is independent of variable \u201c7\u201d given variable \u201c2\u201d. \u2022 Trina claims variable \u201c2\u201d is independent of variable \u201c6\u201d given variable \u201c3\u201d. Which of the following is true?", "opts": ["Both the students are correct.", "Trina is incorrect and Manish is correct.", "Trina is correct and Manish is incorrect.", "Both the students are incorrect.", "Insufficient information to make any conclusion. Probability distributions of each variable should be given."], "ans": [1]}, {"q": "Four random variables are known to follow the given factorization P ( A 1 = a 1 , A 2 = a 2 , A 3 = a 3 , A 4 = a 4 ) = 1 Z \u03c8 1 ( a 2 , a 3 ) \u03c8 2 ( a 1 , a 4 ) \u03c8 3 ( a 2 , a 4 ) \u03c8 4 ( a 1 , a 3 ) P ( A 1 = a 1 , A 2 = a 2 , A 3 = a 3 , A 4 = a 4 ) = 1 Z \u03c8 1 ( a 2 , a 3 ) \u03c8 2 ( a 1 , a 4 ) \u03c8 3 ( a 2 , a 4 ) \u03c8 4 ( a 1 , a 3 ) The corresponding Markov network would be", "opts": ["", "", "", "", ""], "ans": [0, 1, 2, 3, 4]}, {"q": "Does there exist a more compact factorization involving less number of factors for the distribution given in previous question?", "opts": ["Yes", "No", "Insufficient information"], "ans": [1]}, {"q": "Consider the following Markov Random Field. Which of the following nodes will have no effect on D given the Markov Blanket of D?", "opts": ["A", "B", "C", "E", "F", "G", "H", "I", "J"], "ans": [0, 7, 8]}], "10": [{"q": "In the lecture on the BIRCH algorithm, it is stated that using the number of points N , sum of points SUM and sum of squared points SS , we can determine the centroid and radius of the combination of any two clusters A and B. How do you determine the centroid of the combined cluster? (In terms of N,SUM and SS of both the clusters)", "opts": ["S U M A + S U M B S U M A + S U M B", "S U M A N A + S U M B N B S U M A N A + S U M B N B", "S U M A + S U M B N A + N B S U M A + S U M B N A + N B", "S S A + S S B N A + N B S S A + S S B N A + N B"], "ans": [2]}, {"q": "What assumption does the CURE clustering algorithm make with regards to the shape of the clusters?", "opts": ["No assumption", "Spherical", "Elliptical"], "ans": [0]}, {"q": "What would, in general, can be the effect of increasing MinPts in DBSCAN while retaining the same Eps parameter? (Note that more than one statement may be correct)", "opts": ["Increase in the sizes of individual clusters", "Decrease in the sizes of individual clusters", "Increase in the number of clusters", "Decrease in the number of clusters"], "ans": [1, 2]}, {"q": "Visualize the dataset DS1. Which of the following algorithms will be able to recover the true clusters (check by visual inspection).", "opts": ["K-means clustering", "Single link hierarchical clustering", "Complete link hierarchical clustering", "Average link hierarchical clustering"], "ans": [1]}, {"q": "Consider the similarity matrix given below: Which of the following shows the hierarchy of clusters created by the single link clustering algorithm.", "opts": ["", "", "", ""], "ans": [0, 1, 2, 3]}, {"q": "For the similarity matrix given in the previous question, which of the following shows the hierarchy of clusters created by the complete link clustering algorithm.", "opts": ["", "", "", ""], "ans": [0, 1, 2, 3]}], "11": [{"q": "Given n samples x 1 , x 2 , . . . , x N x 1 , x 2 , . . . , x N drawn independently from an Geometric distribution unknown parameter p p given by pdf Pr ( X = k ) = ( 1 \u2212 p ) k \u2212 1 p for k = 1 , 2 , 3 , \u22c5 \u22c5 \u22c5 Pr ( X = k ) = ( 1 \u2212 p ) k \u2212 1 p for k = 1 , 2 , 3 , \u00b7 \u00b7 \u00b7 , find the MLE of p p .", "opts": ["p M L E = \u03a3 n i = 1 x i p M L E = \u03a3 i = 1 n x i", "p M L E = n \u03a3 n i = 1 x i p M L E = n \u03a3 i = 1 n x i", "p M L E = n \u03a3 n i = 1 x i p M L E = n \u03a3 i = 1 n x i", "p M L E = \u03a3 n i = 1 x i n p M L E = \u03a3 i = 1 n x i n", "p M L E = n \u2212 1 \u03a3 n i = 1 x i p M L E = n \u2212 1 \u03a3 i = 1 n x i", "p M L E = \u03a3 n i = 1 x i n \u2212 1 p M L E = \u03a3 i = 1 n x i n \u2212 1"], "ans": [1, 2]}, {"q": "Suppose we are trying to model a p p dimensional Gaussian distribution. What is the actual number of independent parameters that need to be estimated in mean and covariance matrix respectively?", "opts": ["1 , 1 1 , 1", "p \u2212 1 , 1 p \u2212 1 , 1", "p , p p , p", "p , p ( p + 1 ) p , p ( p + 1 )", "p , p ( p + 1 ) / 2 p , p ( p + 1 ) / 2", "p \u2212 1 , p ( p + 1 ) p \u2212 1 , p ( p + 1 )", "p \u2212 1 , p ( p + 1 ) / 2 + 1 p \u2212 1 , p ( p + 1 ) / 2 + 1", "p \u2212 1 , ( p + 3 ) / 2 p \u2212 1 , ( p + 3 ) / 2", "p , p ( p + 1 ) \u2212 1 p , p ( p + 1 ) \u2212 1", "p , p ( p + 1 ) / 2 \u2212 1 p , p ( p + 1 ) / 2 \u2212 1", "p , ( p + 3 ) / 2 \u2212 1 p , ( p + 3 ) / 2 \u2212 1", "p , p 2 p , p 2", "p , p 2 / 2 p , p 2 / 2", "None of these"], "ans": [4]}, {"q": "Given n n samples x 1 , x 2 , . . . , x N x 1 , x 2 , . . . , x N drawn independently from a Bionomial distribution unknown parameter p p , find the MLE of p p . Binomial Distribution is used to model \u2019x\u2019 successes in \u2019n\u2019 Bernoulli trials. Its p.d.f. is given by: f ( x , n , p ) = ( n x ) p x ( 1 \u2212 p ) n \u2212 x f ( x , n , p ) = ( n x ) p x ( 1 \u2212 p ) n \u2212 x for x = 0 , 1 , 2 , . . . , n x = 0 , 1 , 2 , . . . , n , where ( n x ) = n ! x ! ( n \u2212 x ) ! ( n x ) = n ! x ! ( n \u2212 x ) !", "opts": ["p = \u03a3 N i = 1 x i p = \u03a3 i = 1 N x i", "p M L E = N \u03a3 N i = 1 x i p M L E = N \u03a3 i = 1 N x i", "p M L E = n \u03a3 N i = 1 x i p M L E = n \u03a3 i = 1 N x i", "p M L E = n \u03a3 N i = 1 x i p M L E = n \u03a3 i = 1 N x i", "p M L E = N \u03a3 n i = 1 x i p M L E = N \u03a3 i = 1 n x i", "p M L E = \u03a3 N i = 1 x i n p M L E = \u03a3 i = 1 N x i n", "p M L E = \u03a3 N i = 1 x i N p M L E = \u03a3 i = 1 N x i N", "p M L E = n \u03a3 N i = 1 x i N p M L E = n \u03a3 i = 1 N x i N", "p M L E = \u03a3 N i = 1 x i n . N p M L E = \u03a3 i = 1 N x i n . N", "p M L E = n \u2212 1 \u03a3 N i = 1 x i p M L E = n \u2212 1 \u03a3 i = 1 N x i", "p M L E = \u03a3 N i = 1 x i N \u2212 1 p M L E = \u03a3 i = 1 N x i N \u2212 1", "p M L E = \u03a3 N i = 1 x i n \u2212 1 p M L E = \u03a3 i = 1 N x i n \u2212 1"], "ans": [8]}, {"q": "In Gaussian Mixture Models, \u03c0 i \u03c0 i are the mixing coefficients. Select the incorrect conditions that the mixing coefficients need to satisfy for a valid GMM model.", "opts": ["\u2212 1 \u2264 \u03c0 i \u2264 1 , \u2200 i \u2212 1 \u2264 \u03c0 i \u2264 1 , \u2200 i", "0 \u2264 \u03c0 i \u2264 1 , \u2200 i 0 \u2264 \u03c0 i \u2264 1 , \u2200 i", "\u03a3 i \u03c0 i = 1 \u03a3 i \u03c0 i = 1", "\u03a3 i \u03c0 i \u03a3 i \u03c0 i need not be bounded"], "ans": [0, 3]}, {"q": "Expectation-Maximization, or the EM algorithm, consists of two steps - E step and the M-step. Using the following notation, select the correct set of equations used at each step of the algorithm. Notation. X Known/Given variables/data Z Hidden/Unknown variables \u03b8 Total set of parameters to be learned \u03b8 k Values of all the parameters after stage k k Q (, ) The Q Q -function as described in the lectures", "opts": ["E \u2212 E Z | X , \u03b8 [ l o g ( P r ( X , Z | \u03b8 m ) ) ] E \u2212 E Z | X , \u03b8 [ l o g ( P r ( X , Z | \u03b8 m ) ) ]", "E \u2212 E Z | X , \u03b8 m \u2212 1 [ l o g ( P r ( X , Z | \u03b8 ) ) ] E \u2212 E Z | X , \u03b8 m \u2212 1 [ l o g ( P r ( X , Z | \u03b8 ) ) ]", "M \u2212 a r g m a x \u03b8 \u03a3 Z P r ( Z | X , \u03b8 m \u2212 2 ) \u22c5 l o g ( P r ( X , Z | \u03b8 ) ) M \u2212 a r g m a x \u03b8 \u03a3 Z P r ( Z | X , \u03b8 m \u2212 2 ) \u00b7 l o g ( P r ( X , Z | \u03b8 ) )", "M \u2212 a r g m a x \u03b8 Q ( \u03b8 , \u03b8 m \u2212 2 ) M \u2212 a r g m a x \u03b8 Q ( \u03b8 , \u03b8 m \u2212 2 )", "M \u2212 a r g m a x \u03b8 Q ( \u03b8 , \u03b8 m \u2212 1 ) M \u2212 a r g m a x \u03b8 Q ( \u03b8 , \u03b8 m \u2212 1 )"], "ans": [1, 4]}], "12": [{"q": "You have been recruited as a lead engineer by ArrEll corporation which wants to enter the self-driving car market. In the context of the standard Reinforcement Learning framework, what would you classify as the state and actions ? Note that your system does not have access to previous states.", "opts": ["State -(Current steering wheel position, Current pedal positions, Current speed) Actions -(Turn the wheel, Press pedals)", "State -(Current steering wheel position, Current pedal positions, Current acceleration) Actions -(Turn the wheel, Press pedals)", "State -(Current steering wheel position, Current pedal positions, Current speed) Actions -(Change direction, Change speed)", "State -(Current steering wheel position, Current pedal positions, Current acceleration) Actions -(Change direction, Change speed)"], "ans": [0]}, {"q": "After completing Introduction to Machine Learning on NPTEL, you have landed a job as a Data Scientist at YumEll Solutions Inc. Your first assignment as a trainee is to learn a classifier given some data and present insights on it to your manager, who apparently doesn\u2019t seem to have any knowledge on Machine Learning. Which of the following classification models would you pick to best explain the nature of the data and the underlying distribution to your manager?", "opts": ["Linear Models", "Support Vector Machines", "Decision Trees", "Artificial Neural Networks"], "ans": [2]}, {"q": "What happens when your model complexity (such as interaction terms in linear regression, order of polynomial in SVM, etc.) increases?(multiple options may be correct).", "opts": ["Model Bias increases", "Model Bias decreases", "Variance of the model increases", "Variance of the model decreases"], "ans": [1, 2]}, {"q": "In the context of Reinforcement Learning algorithms, which of the following definitions constitutes a valid Markov State? (multiple options may be correct)", "opts": ["For Chess: Positions of yours and the opponent\u2019s remaining pieces", "For Tic-Tac-Toe: A snapshot of the game board (all Xs, Os and empty spaces)", "For Chess: Positions of your pieces and the identities of the opponents defeated pieces.", "For Tennis: Position of the ball"], "ans": [0, 1]}, {"q": "Suppose we want an RL agent to learn to play the game of golf. For training purposes, we make use of a golf simulator program. Assume that the original reward distribution gives a reward of +10 when the golf ball is hit into the hole and -1 for all other transitions. To aid the agent\u2019s learning process, we propose to give an additional reward of +3 whenever the ball is within a 1 metre radius of the hole. Is this additional reward a good idea or not? Why?", "opts": ["Yes. The additional reward will help speed-up learning.", "Yes. Getting the ball to within a metre of the hole is like a sub-goal and hence, should be rewarded.", "No. The additional reward may actually hinder learning.", "No. It violates the idea that a goal must be outside the agent\u2019s direct control."], "ans": [2]}, {"q": "You want to toss a fair coin a number of times and obtain the probability of getting heads by taking a simple average. What is the estimated number of times you\u2019ll have to toss the coin to make sure that your estimated probability is within 10% of the actual probability, at least 90% of the time?", "opts": ["400 \u2217 \u2217 ln(20)", "800 \u2217 \u2217 ln(20)", "200 \u2217 \u2217 ln(20)"], "ans": [2]}, {"q": "You face a particularly challenging RL problem, where the reward distribution keeps changing with time. In order to gain maximum reward in this scenario, does it make sense to stop exploration or continue exploration?", "opts": ["Stop exploration", "Continue exploration"], "ans": [1]}]};

var currentWeek = null;
var currentMode = 'read';
var practiceState = {};
var submitted = false;
var shuffledIndices = [];

var IMAGE_OVERRIDES = {
  "Consider the following relation between a dependent variable and an independent variable identified by doing simple linear regression. Which among the following relations between the two variables does the graph indicate?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W3A3Q4.png"]
  },
  "Consider the following data: Assuming that you apply LDA to this data, what is the estimated covariance matrix?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W3A3Q9.png"]
  },
  "Consider the data set given below. Can we use perceptron learning algorithm to build a model using only the given features that achieves zero misclassification error on the training data?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W4A4Q1.png"]
  },
  "You are given the following neural networks which take two binary valued inputs x 1 , x 2 ∈ { 0 , 1 } x 1 , x 2 ∈ { 0 , 1 } and the activation function is the threshold function ( h ( x ) = 1 ( h ( x ) = 1 if x > 0 ; 0 x > 0 ; 0 otherwise). Which of the following logical functions does it compute?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W5A5Q3.png"]
  },
  "Consider the function f 1 ( x ) = e α 0 + α x 1 + e α 0 + α x f 1 ( x ) = e α 0 + α x 1 + e α 0 + α x and f 2 ( x ) = e β 0 + β x 1 + e β 0 + β x f 2 ( x ) = e β 0 + β x 1 + e β 0 + β x shown in the figure below: Which of the following is correct?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W5A5Q6.png"]
  },
  "Consider the following data set. Considering ’profitable’ as the binary valued attribute we are trying to predict, which of the attributes would you select as the root in a decision tree with multi-way splits using the cross-entropy impurity measure?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W6A6Q5.png"]
  },
  "For the given confusion matrix, compute the recall": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W7A7Q1.png"]
  },
  "Consider the following graphical model, which of the following are false about the model? (multiple options may be correct)": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W8A8Q9.png"]
  },
  "Consider the bayesian network shown below. Two students - Manish and Trisha make the following claims: • Manish claims P ( D | { S , L , C } ) = P ( D | { L , C } ) P ( D | { S , L , C } ) = P ( D | { L , C } ) • Trisha claims P ( D | { S , L } ) = P ( D | L ) P ( D | { S , L } ) = P ( D | L ) where P ( X | Y ) P ( X | Y ) denotes probability of event X X given Y Y . Please note that Y Y can be a set. Which of the following is true?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q1.png"]
  },
  "Consider the Bayesian graph shown below in Figure 2. The random variables have the following notation: d - Difficulty, i - Intelligence, g - Grade, s - SAT, l - Letter. The random variables are modeled as discrete variables and the corresponding CPDs are as below. What is the probability of P ( i = 1 , d = 0 , g = 2 , s = 1 , l = 1 ) P ( i = 1 , d = 0 , g = 2 , s = 1 , l = 1 ) ?": {
    q_imgs: [
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q3.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q3a.png",
      "https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q3b.png"
    ]
  },
  "Consider the Bayesian network shown below in Figure 3 Two students - Manish and Trisha make the following claims: • Manish claims P ( H | { S , G , J } ) = P ( H | { G , J } ) P ( H | { S , G , J } ) = P ( H | { G , J } ) • Trisha claims P ( H | { S , C , J } ) = P ( H | { C , J } ) P ( H | { S , C , J } ) = P ( H | { C , J } ) Which of the following is true?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q5.png"]
  },
  "Consider the Markov network shown below in Figure 4 Which of the following variables are NOT in the markov blanket of variable \u201c3\u201d shown in the above Figure 4 ? (multiple answers may be correct)": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q6.png"]
  },
  "Consider the following Markov Random Field. Which of the following nodes will have no effect on D given the Markov Blanket of D?": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q10.png"]
  },
  "Consider the similarity matrix given below: Which of the following shows the hierarchy of clusters created by the single link clustering algorithm.": {
    q_imgs: ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q1.png"],
    opt_imgs: [
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q5a.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q5b.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q5c.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q5d.png"]
    ]
  },
  "Four random variables are known to follow the given factorization P ( A 1 = a 1 , A 2 = a 2 , A 3 = a 3 , A 4 = a 4 ) = 1 Z \u03c8 1 ( a 2 , a 3 ) \u03c8 2 ( a 1 , a 4 ) \u03c8 3 ( a 2 , a 4 ) \u03c8 4 ( a 1 , a 3 ) P ( A 1 = a 1 , A 2 = a 2 , A 3 = a 3 , A 4 = a 4 ) = 1 Z \u03c8 1 ( a 2 , a 3 ) \u03c8 2 ( a 1 , a 4 ) \u03c8 3 ( a 2 , a 4 ) \u03c8 4 ( a 1 , a 3 ) The corresponding Markov network would be": {
    opt_imgs: [
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q8a.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q8b.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q8c.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q8d.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W9A9Q8e.png"]
    ]
  },
  "For the similarity matrix given in the previous question, which of the following shows the hierarchy of clusters created by the complete link clustering algorithm.": {
    opt_imgs: [
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q6a.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q6b.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q6c.png"],
      ["https://storage.googleapis.com/swayam-node1-production.appspot.com/assets/img/noc20_cs73/W10A10Q6d.png"]
    ]
  }
};

function applyImageOverrides() {
  Object.keys(IMAGE_OVERRIDES).forEach(function(questionText) {
    var override = IMAGE_OVERRIDES[questionText];
    Object.keys(DATA).forEach(function(weekKey) {
      DATA[weekKey].forEach(function(question) {
        if (question.q === questionText) {
          if (override.q_imgs) question.q_imgs = override.q_imgs.slice();
          if (override.opt_imgs) question.opt_imgs = override.opt_imgs.map(function(row) { return row.slice(); });
        }
      });
    });
  });
}

applyImageOverrides();

function init() {
  var nav = document.getElementById('weekNav');

  var notesBtn = document.createElement('button');
  notesBtn.className = 'week-btn';
  notesBtn.textContent = 'Notes';
  notesBtn.onclick = function() { window.location.href = 'notes.html'; };
  nav.appendChild(notesBtn);

  for (var w = 1; w <= 12; w++) {
    (function(week) {
      var btn = document.createElement('button');
      btn.className = 'week-btn';
      btn.textContent = 'W' + week;
      btn.onclick = function() { selectWeek(week); };
      nav.appendChild(btn);
    })(w);
  }
}

function selectWeek(w) {
  currentWeek = w;
  currentMode = 'read';
  submitted = false;
  document.querySelectorAll('.week-btn').forEach(function(b) {
    b.classList.toggle('active', parseInt(b.textContent.replace('W','')) === w);
  });
  render();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function setMode(mode) {
  currentMode = mode;
  if (mode === 'practice') resetPractice();
  render();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function resetPractice() {
  practiceState = {};
  submitted = false;
  var qs = DATA[String(currentWeek)] || [];
  shuffledIndices = shuffle(qs.map(function(_,i){ return i; }));
}

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

var LETTERS = 'ABCDEFGHIJKLMNOP';

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, ' ');
}

function renderImgs(urls) {
  if (!urls || !urls.length) return '';
  var html = '<div class="q-img-wrap">';
  urls.forEach(function(url) {
    html += '<img class="q-figure" src="' + escHtml(url) + '" alt="Figure" loading="lazy" onerror="this.parentNode.style.display=\'none\'">';
  });
  html += '</div>';
  return html;
}

function render() {
  var main = document.getElementById('mainContent');
  if (!currentWeek) {
    main.innerHTML = '<div class="empty">&#8592; Select a week to begin</div>';
    return;
  }
  var qs = DATA[String(currentWeek)] || [];
  var html = '';
  html += '<h1 class="page-title">Week ' + currentWeek + '</h1>';
  html += '<div class="page-subtitle">Assignment ' + currentWeek + ' &mdash; ' + qs.length + ' questions</div>';
  html += '<div class="mode-tabs">'
    + '<button class="mode-tab ' + (currentMode==='read'?'active':'') + '" onclick="setMode(\'read\')">&#128218; Read</button>'
    + '<button class="mode-tab ' + (currentMode==='practice'?'active':'') + '" onclick="setMode(\'practice\')">&#9889; Practice</button>'
    + '</div>';

  if (currentWeek === 12 && currentMode === 'read') {
    html += '<div class="week12-note">&#9888; Week 12 answers are based on submitted responses (assignment still active). Verify before exam.</div>';
  }

  if (currentMode === 'read') html += renderRead(qs);
  else html += renderPractice(qs);

  main.innerHTML = html;
}

function renderRead(qs) {
  if (!qs.length) return '<div class="empty">No questions found.</div>';
  var html = '';
  qs.forEach(function(q, i) {
    var ansSet = {};
    (q.ans || []).forEach(function(a) { ansSet[a] = true; });
    html += '<div class="question-card">';
    html += '<div class="q-header">';
    html += '<span class="q-num">Q' + (i+1) + '</span>';
    html += '<div class="q-text">' + escHtml(q.q) + '</div>';
    html += '</div>';
    if (q.q_imgs && q.q_imgs.length) {
      html += renderImgs(q.q_imgs);
    }
    html += '<div class="q-options">';
    q.opts.forEach(function(opt, oi) {
      var isCorr = ansSet[oi];
      var optImgs = (q.opt_imgs && q.opt_imgs[oi]) ? q.opt_imgs[oi] : [];
      html += '<div class="opt' + (isCorr?' correct-opt':'') + (optImgs.length ? ' has-img' : '') + '">';
      html += '<span class="opt-letter">' + LETTERS[oi] + '.</span>';
      html += '<div class="opt-body">';
      if (opt && opt.trim()) html += '<span>' + escHtml(opt) + '</span>';
      if (optImgs.length) html += renderImgs(optImgs);
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    var ansTexts = (q.ans||[]).map(function(ai){ return q.opts[ai]; }).filter(Boolean);
    if (ansTexts.length) {
      html += '<div class="answer-badge">';
      html += '<div class="answer-badge-label">&#10003; CORRECT ANSWER' + (ansTexts.length>1?'S':'') + '</div>';
      html += '<div class="answer-badge-val">' + ansTexts.map(escHtml).join('<br>') + '</div>';
      html += '</div>';
    }
    html += '</div>';
  });
  return html;
}

function renderPractice(qs) {
  if (!qs.length) return '<div class="empty">No questions found.</div>';
  if (!shuffledIndices.length) {
    shuffledIndices = shuffle(qs.map(function(_,i){ return i; }));
  }
  var html = '<div class="score-panel' + (submitted?' visible':'') + '" id="scorePanel">';
  if (submitted) html += buildScore(qs);
  html += '</div>';

  shuffledIndices.forEach(function(qi, displayIdx) {
    var q = qs[qi];
    var ansSet = {};
    (q.ans||[]).forEach(function(a){ ansSet[a]=true; });
    var isMulti = (q.ans||[]).length > 1;
    var selected = practiceState[qi] || [];
    var selSet = {};
    selected.forEach(function(s){ selSet[s]=true; });

    html += '<div class="practice-card" id="pcard-' + qi + '">';
    html += '<div class="q-header">';
    html += '<span class="q-num">Q' + (displayIdx+1) + (isMulti?' &middot;MSQ':'') + '</span>';
    html += '<div class="q-text">' + escHtml(q.q) + '</div>';
    html += '</div>';
    if (q.q_imgs && q.q_imgs.length) {
      html += renderImgs(q.q_imgs);
    }
    html += '<div style="padding: 0 0 4px;">';
    q.opts.forEach(function(opt, oi) {
      var isSel = !!selSet[oi];
      var isCorr = !!ansSet[oi];
      var optImgs = (q.opt_imgs && q.opt_imgs[oi]) ? q.opt_imgs[oi] : [];
      var cls = 'p-opt';
      var check = '';
      if (submitted) {
        if (isSel && isCorr)  { cls += ' show-correct'; check = '&#10003;'; }
        else if (isSel && !isCorr) { cls += ' show-wrong'; check = '&#10007;'; }
        else if (!isSel && isCorr) { cls += ' show-missed'; check = '&middot;'; }
      } else {
        if (isSel) cls += ' selected';
      }
      if (optImgs.length) cls += ' has-img';
      html += '<div class="' + cls + '"';
      if (!submitted) {
        html += ' onclick="toggleOpt(' + qi + ',' + oi + ',' + (isMulti?'true':'false') + ')"';
      }
      html += '>';
      html += '<span class="opt-letter">' + LETTERS[oi] + '.</span>';
      html += '<div class="opt-body">';
      if (opt && opt.trim()) html += '<span>' + escHtml(opt) + '</span>';
      if (optImgs.length) html += renderImgs(optImgs);
      html += '</div>';
      if (check) html += '<span class="p-opt-check">' + check + '</span>';
      html += '</div>';
    });
    html += '</div>';

    if (submitted) {
      var selArr = selected;
      var corrArr = q.ans || [];
      var selSet2 = {}; selArr.forEach(function(s){ selSet2[s]=true; });
      var corrSet2 = {}; corrArr.forEach(function(c){ corrSet2[c]=true; });
      var allRight = corrArr.every(function(c){ return selSet2[c]; }) && selArr.every(function(s){ return corrSet2[s]; });
      var anyRight = selArr.some(function(s){ return corrSet2[s]; });
      var label, cls;
      if (allRight) { label = '&#10003; Correct'; cls = 'correct'; }
      else if (anyRight) { label = '~ Partially correct'; cls = 'partial'; }
      else { label = '&#10007; Incorrect'; cls = 'wrong'; }
      html += '<div class="q-result-label ' + cls + '">' + label + '</div>';
    }
    html += '</div>';
  });

  if (!submitted) {
    html += '<button class="submit-btn" onclick="submitPractice()">Submit Answers</button>';
  } else {
    html += '<button class="submit-btn retry" onclick="retryPractice()">&#8635; Try Again (New Order)</button>';
  }
  return html;
}

function buildScore(qs) {
  var correct = 0, wrong = 0, partial = 0;
  qs.forEach(function(q, qi) {
    var corrSet = {}; (q.ans||[]).forEach(function(c){ corrSet[c]=true; });
    var selArr = practiceState[qi] || [];
    var selSet = {}; selArr.forEach(function(s){ selSet[s]=true; });
    var allRight = (q.ans||[]).every(function(c){ return selSet[c]; }) && selArr.every(function(s){ return corrSet[s]; });
    var anyRight = selArr.some(function(s){ return corrSet[s]; });
    if (allRight) correct++;
    else if (anyRight) partial++;
    else wrong++;
  });
  var pct = Math.round((correct + partial * 0.5) / qs.length * 100);
  return '<div class="score-big">' + pct + '%</div>'
    + '<div class="score-label">Practice Score</div>'
    + '<div class="score-breakdown">'
    + '<div class="score-stat"><div class="score-stat-num green">' + correct + '</div><div class="score-stat-label">Correct</div></div>'
    + (partial ? '<div class="score-stat"><div class="score-stat-num blue">' + partial + '</div><div class="score-stat-label">Partial</div></div>' : '')
    + '<div class="score-stat"><div class="score-stat-num red">' + wrong + '</div><div class="score-stat-label">Wrong</div></div>'
    + '<div class="score-stat"><div class="score-stat-num">' + qs.length + '</div><div class="score-stat-label">Total</div></div>'
    + '</div>';
}

function toggleOpt(qi, oi, isMulti) {
  if (submitted) return;
  if (!practiceState[qi]) practiceState[qi] = [];
  var arr = practiceState[qi];
  var idx = arr.indexOf(oi);
  if (idx >= 0) arr.splice(idx, 1);
  else {
    if (!isMulti) practiceState[qi] = [oi];
    else arr.push(oi);
  }
  render();
}

function submitPractice() {
  submitted = true;
  render();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function retryPractice() {
  resetPractice();
  render();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

init();
