from IClassifier import IClassifier

class Dummy(IClassifier):

    def train(self, X, y):
        return self

    def predict(self, X):
        return ["ham" for x in X]
